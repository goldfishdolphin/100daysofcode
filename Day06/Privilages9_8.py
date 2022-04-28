class User:
    '''A simple attempt to represent a user.'''
    def __init__(self, first_name, last_name, age, location):
        '''Initialize attributes to describe a user'''
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.location = location


    def describe_user(self):
        '''Stimulate user description when command is called'''
        print(f"\nThe name of the user is {self.first_name.title()} {self.last_name.title()}")
        print(f"The age of this user is {self.age} years.")
        print(f"The location of {self.first_name.title()} {self.last_name.title()} is {self.location.title()}.")


    def greet_user(self):
        '''Stimulate greet user when this command is called.'''
        print(f"Hello {self.first_name} {self.last_name}!")
class Privilages:
    """A simple attempt to model the privilages of admin."""
    def __init__(self,privilages=["can add post", "can delete a post", "can ban a user"]):
        self.privilages = privilages
      

    def show_privilages(self):
        '''Print the privilages specific to admin.'''
        for self.privilage in self.privilages:
            print(f"The adminstrators can {self.privilage}. ")



class Admin(User):
    '''A simple attempt to represent an admin user'''
    def __init__(self, first_name, last_name, age, location):
        '''Intialize the attributes of a user parent class.
        Then intialize the attributes of user specific to admin user.'''

        super().__init__(first_name, last_name, age, location)
        self.privilages = Privilages()
        


admin_user = Admin('alex','monty', 20, 'london')
admin_user.describe_user()
admin_user.privilages.show_privilages()

