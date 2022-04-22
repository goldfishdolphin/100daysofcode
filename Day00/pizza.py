'''def make_pizza(*toppings):
    """Print the list of the toppings that have been requested."""
    print(toppings)


make_pizza('peperoni')
make_pizza('mushroom', 'onion', 'extra cheese', 'green peppers')'''


def make_pizza(*toppings):
    """Summarize the pizza we are going to make."""
    print("\n Making a pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")


make_pizza('peperoni')
make_pizza('mushroom', 'onion', 'extra cheese', 'green peppers')

