from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = ['id', "task_text", "task_status", "taks_created_at",]
