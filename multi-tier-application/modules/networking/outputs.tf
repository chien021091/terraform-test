output "vpc" {
  value       = module.vpc
}

output "sg" {
  value       = {
      lb = module.lb_sg.security_group.id
      web = module.web_sg.security_group.id
      lb = module.db_sg.security_group.id
  }
}

