# FastFood Restaurant-ChatBOT

This is a chatbot for a fast food restaurant, designed to help customers place orders from a list of items. The chat app will provide options for customers to choose from, and they can simply request orders by specifying the numbers of the items they want.

---

## Requirements

1. The ChatBot interface should resemble a chat interface.
2. Authentication is not necessary, but user sessions based on devices should be stored.
3. Upon landing on the chatbot page, the bot should send the following options to the customer:

- Select 1 to place an order
- Select 99 to checkout order
- Select 98 to see order history
- Select 97 to see current order
- Select 0 to cancel order

4. When the customer selects "1", the bot should display a list of items from the restaurant. The order items may have multiple options, but the customer should be able to select preferred items from the list using the same number select system and place an order.
5. If the customer selects "99" for an order, the bot should respond with "order placed". If there are no orders, the bot should respond with "No order to place". The customer should also have the option to place a new order.
6. If the customer selects "98", the bot should return all placed orders from previous orders to present orders.
7. If the customer selects "97", the bot should return the current order and return "no current order" if there is none.
8. If the customer selects "0", the bot should cancel the order if there is one.

---

## Setup

- Pull the repository to your local machine.
- Open the command-line interface (CLI) and run the command npm install to install all required Node modules.
- Update the environment variables by either:
- Start the application by running the command 'npm run start' in the CLI.

## APIs

---

### When a client connects

- Host: 3000
- Route: /
- Method: GET

- ChatBot Response: Hi dear! What's your name?
- User Response: "String"

Success

```
Welcome to the Fast Food ChatBot, `${string}!`
1. Place an order
99. Checkout order
98. Order history
97. Current order
0. Cancel order

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>1</kbd>
- ChatBot Response

Success

```
The menu items are:
11. Fried Chicken
12. Burger
13. Pizza
14. Hot Dog
15. French Fries
Type the item number to add to your order

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>11</kbd>
- ChatBot Responses

Success

```
You have added Fried Chicken to your current order
Add another order from the menu
Type '97' to see your current order
'98' to see order history
'99' to checkout
'0' to cancel your order

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>97</kbd>
- ChatBot Response

Success

```
Your current order is: Fried Chicken
1. Place an order
99. Checkout order
98. Order history
97. Current order
0. Cancel order

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>99</kbd>
- ChatBot Response

Success

```
Thanks for your order, `${string}!` Your order of Fried Chicken will be ready shortly.
1. Place an order
98. Order history
0. Cancel order

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>98</kbd>
- ChatBot Responses

Success

```
Here is the order history:
`${string}` ordered Fried Chicken on Thu Mar 16 2023
1. Place an order
98. Order history
0. Cancel order

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>0</kbd>
- ChatBot Responses

Success

```
Your order has been cancelled.
1. Place a new order
98. Order history

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>98</kbd>
- ChatBot Responses

Success

```
There is no order history yet. Type '1' to see the menu.

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>97</kbd>
- ChatBot Responses

Success

```
You don't have any items in your current order yet. Type '1' to see the menu.

```

### When a client sends a response to the server

- Route: /
- Method: GET
- Body: <kbd>0</kbd>
- ChatBot Responses

Success

```
There is nothing to cancel. Type '1' to see the menu.

```
