variable "region" {
  type        = string
  default     = "us-east-1"
}

variable "project" {
  type        = string
  default     = "terraform-series"
  description = "The project name to use for unique resource naming"
}

variable "principal_arns" {
  type        = list(string)
  default     = null
  description = "A list of principal arns allowed to assume the IAM role"
}

variable "namespace" {
  type        = string
  default     = "series"
}

