from user import User
from admin_privilages import Admin

admin_user = Admin('alex','monty', 20, 'london')
admin_user.describe_user()
admin_user.privilages.show_privilages()

