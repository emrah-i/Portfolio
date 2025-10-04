## Portfolio Website

### Description

I designed and built a production-ready static portfolio website that showcases end-to-end DevOps practice. The site is built with Vite, TypeScript, React, and Tailwind CSS and served from an S3 bucket behind a CloudFront distribution, with a custom domain managed in Route 53 (A/AAAA records) and ACM-issued TLS for secure delivery. The dynamic portion of the infrastructure is codified in Terraform and deployed via a GitHub + Terraform HCP pipeline that plans and applies automatically on every push to main.

A serverless metrics stack powers simple analytics: API Gateway triggers one Lambda to update a DynamoDB table and another to retrieve metrics. Security and reliability are baked in with AWS WAF in front of the API to restrict access and apply rate limiting, plus CloudWatch alarms for billing thresholds and Lambda activity. Alerts fan-out through SNS to email and Slack (via Amazon Q Developer), providing immediate notifications. The result is a secure, scalable, low-cost website with fully automated, repeatable deployments and production-grade monitoring and controls.

Portfolio: [https://emrakh.com](https:/emrakh.com)

Detailed Blog Post About Website: [https://medium.com/@ibraem1026](https://medium.com/@ibraem1026/my-journey-deploying-my-portfolio-to-the-cloud-b6361122b87d)

### Used Technology

* Terraform
* Terraform Cloud (HCP)
* AWS:
  * ACM
  * API Gateway
  * Amazon Q Developer
  * CloudFront
  * CloudWatch
  * IAM
  * Lambda
  * Route 53
  * S3
  * SNS
  * WAF





