provider "aws" {
    region = "us-east-1"
}

output "dns" {
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}
