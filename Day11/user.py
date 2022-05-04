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
