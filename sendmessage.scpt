var messages = Application('Messages');

var buddy = messages.services["E:'email-sender'"].buddies["email-receive"];

messages.send("Dispo carrefour trouvé", {to: buddy});
