class Resturant:
    #A simple attempt to model a resturant.
    def __init__(self,resturant_name, cuisine_type):
        # Initialize resturant name and cuisine type attributes.
        self.resturant_name = resturant_name
        self.cuisine_type = cuisine_type


    def describe_resturant(self):
        # Stimulate resturant's description according to name and cuisine type.
        print(f"\nThe name of the resturant is {self.resturant_name.title()}.")
        print(f"This resturant serves {self.cuisine_type.title()} .")

    

class IcecreamStand(Resturant):
    '''Represent aspects of a car, specific to icecream stands.'''

    def __init__(self,resturant_name, cuisine_type):
        '''Initialize attributes of the parent class'
        Then initialize the attributes specicfic to icecream stand resturant.'''
        super().__init__(resturant_name, cuisine_type)
        self.flavors = ["strawberry","chocolate","mint"]

    def describe_flavors(self):
        """Display the flavours that are available."""
        for self.flavor in self.flavors:
            print(f"Available flavor: {self.flavor.title()}.")


