from user import User
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
        
