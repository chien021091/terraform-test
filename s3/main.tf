provider "aws" {
    region = "us-east-1"
}

resource "aws_s3_bucket" "terraform-bucket" {
    bucket = "terraform-series-bucket-aaaa"

    tags = {
        Name = "Terraform Series"
    }
}