from django.db import models

# Create your models here.

class Task(models.Model):
	task_text = models.TextField(max_length=50)
	task_status = models.BooleanField(default=False)
	taks_created_at = models.DateTimeField(auto_now_add=True)
