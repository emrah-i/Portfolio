terraform {
     required_providers {
          aws = {
               source  = "hashicorp/aws"
               version = "~> 6.0"
          }
     }
}

locals {
  mime_types = {
    html = "text/html"
    css  = "text/css"
    js   = "application/javascript"
    mjs  = "application/javascript"
    cjs  = "application/javascript"
    json = "application/json"
    map  = "application/json"
    svg  = "image/svg+xml"
    png  = "image/png"
    jpg  = "image/jpeg"
    jpeg = "image/jpeg"
    webp = "image/webp"
    gif  = "image/gif"
    ico  = "image/x-icon"
    xml  = "application/xml"
    txt  = "text/plain"
    wasm = "application/wasm"
    woff = "font/woff"
    woff2 = "font/woff2"
    ttf  = "font/ttf"
    otf  = "font/otf"
    pdf  = "application/pdf"
  }
}

resource "aws_s3_bucket" "bucket" {
     bucket = var.bucket_name
     force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "portfolio" {
     bucket = aws_s3_bucket.bucket.id

     index_document {
          suffix = "index.html"
     }
}

resource "aws_s3_bucket_public_access_block" "public_access_block" {
     bucket = aws_s3_bucket.bucket.id
     block_public_acls       = false
     block_public_policy     = false
     ignore_public_acls      = false
     restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_access" {
     bucket = aws_s3_bucket.bucket.id

     policy = jsonencode({
          Version = "2012-10-17"
          Statement = [
               {
               Sid       = "Statement1"
               Effect    = "Allow"
               Principal = "*"
               Action    = "s3:GetObject"
               Resource  = "${aws_s3_bucket.bucket.arn}/*"
               }
          ]
     })

     depends_on = [aws_s3_bucket_public_access_block.public_access_block]
}

resource "aws_s3_object" "upload_object" {
     for_each      = fileset("../dist/", "*")
     bucket        = aws_s3_bucket.bucket.id
     key           = each.value
     source        = "../dist/${each.value}"
     etag          = filemd5("../dist/${each.value}")
     content_type = lookup(
          local.mime_types,
          lower(regex("[^.]*$", each.value)),
          "application/octet-stream"
     )
}

resource "aws_s3_object" "upload_assets" {
     for_each      = fileset("../dist/assets/", "*")
     bucket        = aws_s3_bucket.bucket.id
     key           = "assets/${each.value}"
     source        = "../dist/assets/${each.value}"
     etag          = filemd5("../dist/assets/${each.value}")
     content_type = lookup(
          local.mime_types,
          lower(regex("[^.]*$", each.value)),
          "application/octet-stream"
     )
}