// Function to toggle the visibility of the chatbot window
function toggleChatbot() {
    var chatbotPopup = document.getElementById('chatbot-popup');
    if (chatbotPopup.style.display === 'block') {
        chatbotPopup.style.display = 'none';
    } else {
        chatbotPopup.style.display = 'block';
    }
}

// Function to send user message to the chatbot and display response
function sendMessage() {
    var userInput = document.getElementById('user-input').value.toLowerCase();
    var chatMessages = document.getElementById('chat-messages');
    var response = getResponse(userInput);
    var userMessage = document.createElement('p');
    userMessage.textContent = 'You: ' + userInput;
    chatMessages.appendChild(userMessage);

    // Clear options
    clearOptions();

    // Add typing animation before displaying the response
    var typingAnimation = document.createElement('p');
    typingAnimation.textContent = 'HelpBot: Typing...';
    chatMessages.appendChild(typingAnimation);

    // Scroll to the bottom of the chat window
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate delay before showing the response
    setTimeout(function() {
        // Remove typing animation
        chatMessages.removeChild(typingAnimation);

        // Add chatbot response with typing animation
        var chatbotResponse = document.createElement('p');
        chatbotResponse.textContent = 'HelpBot: ';
        chatMessages.appendChild(chatbotResponse);

        // Iterate over each letter of the response and append it with a delay
        var index = 0;
        var typingInterval = setInterval(function() {
            if (index < response.length) {
                chatbotResponse.textContent += response[index++];
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom as letters are added
            } else {
                clearInterval(typingInterval); // Stop the typing animation when all letters are displayed
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom after typing animation
            }
        }, 40); // Adjust the delay time (in milliseconds) between each letter
    }, 2000); // Adjust the delay time (in milliseconds) before starting the typing animation

    // Clear input box after sending message
    document.getElementById('user-input').value = '';
}

// Function to clear options
function clearOptions() {
    var optionButtons = document.getElementsByClassName('option');
    for (var i = 0; i < optionButtons.length; i++) {
        optionButtons[i].style.display = 'none';
    }
}
// Function to select an option
function selectOption(option) {
    var optionText = document.getElementsByClassName('option')[option - 1].textContent;
    document.getElementById('user-input').value = optionText;

    // Clear all options
    clearOptions();
}



// Function to get chatbot response based on user input
function getResponse(message) {
    if (message.includes("signup") || message.includes("sign") || message.includes("login") || message.includes("logging"))
        return "Signing up on our platform allows you to access exclusive features such as personalized health recommendations, a daily exercise routine maker, and medical record management.";

     else if (message.includes("webpage") || message.includes("web") || message.includes(" website ") || message.includes("what is this webpage about") || message.includes("what is this website about"))
        return ("Our medical webpage provides a centralized hub for accessing essential healthcare resources and tools. From BMI calculators to hospital matching services, it offers valuable functionalities catering to both healthcare professionals and patients. With its focus on convenience and efficiency, the platform aims to enhance the overall healthcare experience and promote better health outcomes.");

    else if (message.includes("motive"))
        return "Our mission is to provide accessible and reliable healthcare information and services to empower individuals to make informed decisions about their health and well-being.";

    else if (message.includes(" website work") || message.includes("working of your website") || message.   includes("working of your web")|| message.includes("working of your webpage") || message.includes("project"))
    return "Our medical website serves as a comprehensive platform offering vital healthcare resources such as BMI calculation, medicine suggestions, and hospital location services. It empowers users to make informed decisions about their health, enhancing accessibility and improving patient outcomes.";

    else if (message.includes("bmi"))
    return "BMI, or Body Mass Index, is a measure of body fat based on your height and weight. You can calculate your BMI using our online calculator to assess your weight status.";

    else if (message.includes("hospital near me") || message.includes("hospital near me") || message.includes("nearby hospital") || message.includes("hospital"))
        return "Locating the nearest hospital is made convenient with our hospital locator tool. Simply tap the button on the page, and voila, you'll find hospitals nearby.";
    else if (message.includes("medimatch") || message.includes("medicine"))
    return "MediMatch is a tool with a database of 400+ illness and symptoms that analyzes them to provide personalized treatment and remedies recommendations."+"\nPlease note that while our platform offers valuable insights, it is important to consult a healthcare professional for accurate diagnosis and treatment.";

    else if (message.includes("owner") || message.includes("owners") || message.includes("operators") || message.includes("developers"))
        return `Our platform is owned, developed, and operated by a team of coders: 
                1) Mst. Vishvajeet
                2) Mst. Zohaib
                3) Mst. Aryan
                Dedicated to improving patient outcomes and enhancing access to quality care.`;

    else if (message.includes("vaccination")) 
        return "Vaccination is a safe and effective way to protect against infectious diseases. Stay up-to-date with recommended vaccines to safeguard your health and prevent the spread of illness.";

    else if (message.includes("healthy diet")) 
        return "A healthy diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats is essential for overall health and well-being. Our nutrition guide can help you make informed dietary choices.";

    else if (message.includes("exercise routine")) 
        return "Regular exercise offers numerous health benefits, including improved cardiovascular health, weight management, enhanced mood, and reduced risk of chronic diseases. Check out our exercise tips and workout plans.";

    else if (message.includes("stress management")) 
        return "Managing stress is important for both physical and mental health. Explore our stress management resources to learn relaxation techniques, mindfulness exercises, and coping strategies.";

    else if (message.includes("sleep quality")) 
        return "Quality sleep is essential for optimal health and well-being. Learn how to improve your sleep habits and create a restful sleep environment with our sleep hygiene tips.";

    else if (message.includes("symptoms")) 
        return "Experiencing symptoms? Our symptom checker tool can help you identify potential causes and provide guidance on when to seek medical attention.";

    else if (message.includes("mental health")) 
        return "Mental health is an integral part of overall wellness. Explore our mental health resources for information on common conditions, treatment options, and self-care strategies.";

    else if (message.includes("side effects")) 
        return "Medications and treatments may cause side effects in some individuals. Be sure to read the accompanying information and consult with your healthcare provider if you experience any adverse reactions.";

    else if (message.includes("allergies")) 
        return "Allergies occur when the immune system reacts to a foreign substance. Our allergy guide can help you identify triggers, manage symptoms, and find relief.";

    else if (message.includes("emergency")) 
        return "In case of a medical emergency, dial your local emergency number or go to the nearest emergency room for immediate assistance.";

    else if (message.includes("health insurance")) 
        return "Health insurance coverage can help offset the cost of medical expenses, including doctor visits, hospital stays, prescription medications, and preventive care services. Explore your insurance options to ensure you have adequate coverage.";

    else if (message.includes("appointment")) 
        return "Schedule an appointment with a healthcare provider to address your health concerns and receive personalized medical advice and treatment.";

    else if (message.includes("nutrition")) 
        return "Nutrition plays a vital role in maintaining good health. Learn about the importance of balanced nutrition and how to make healthy food choices for optimal well-being.";

    else if (message.includes("exercise benefits")) 
        return "Regular exercise offers a multitude of benefits for physical and mental health. Discover the many advantages of staying active and incorporating exercise into your daily routine.";

    else if (message.includes("medication dosage")) 
        return "Follow your healthcare provider's instructions regarding medication dosage carefully to ensure safe and effective treatment. If you have questions or concerns, consult with your doctor or pharmacist.";

    else if (message.includes("treatment options")) 
        return "Explore the various treatment options available for different health conditions, including conventional therapies, alternative medicine, and lifestyle interventions.";

    else if (message.includes("healthy lifestyle habits")) 
        return "Adopting healthy lifestyle habits, such as regular exercise, balanced nutrition, adequate sleep, stress management, and avoiding harmful substances, can significantly impact your overall health and well-being.";

    else if (message.includes("prevention tips")) 
        return "Prevention is key to maintaining good health and avoiding illness. Learn about preventive measures, such as vaccinations, screenings, and healthy lifestyle choices, to protect yourself and your loved ones.";

    else if (message.includes("medical advice")) 
        return "For personalized medical advice tailored to your specific needs and circumstances, consult with a qualified healthcare professional who can provide comprehensive evaluation, diagnosis, and treatment recommendations.";

    else if (message.includes("online resources")) 
        return "There are many reputable online resources where you can find reliable health information, such as government health websites, medical organizations, and trusted health news outlets. Be sure to verify the credibility of the source before relying on the information provided.";

    else if (message.includes("how are you"))
        return "I am doing well, thank you for asking.";
        else if (message.includes("hi") || message.includes("hi,") || message.includes("hello") || message.includes("hey") || message.includes("greeting") || message.includes("good morning") || message.includes("good afternoon") || message.includes("good evening") || message.includes("howdy") || message.includes("hi there"))
        return "Hello! How can I assist you?";

    else if (message.includes("how's your day"))
        return "All set! Thank you for asking! I'm ready to assist you with any questions you have.";

    else if (message.includes("what's up"))
        return "Not much! How can I assist you today?";

    else if (message.includes("howdy"))
        return "Howdy! What can I help you with?";

    else if (message.includes("how can I help"))
        return "You can ask me anything you'd like to know!";

    else if (message.includes("asking") || message.includes('ask'))
        return "Certainly! Feel free to ask me anything.";

    else if (message.includes("how are you doing"))
        return "I'm doing well, thank you for asking.";

    else if (message.includes("what's new"))
        return "Not much, just here to help. How can I assist you?";

    else if (message.includes("how's everything"))
        return "Everything is going smoothly. How can I help you today?";

    else if (message.includes("what's happening"))
        return "Nothing much, just here to assist you. How can I help?";

    else if (message.includes("how are you today"))
        return "I'm doing well, thank you for asking. How can I assist you?";

    else if (message.includes("bye"))
        return "Goodbye! Have a great day!";

    else if (message.includes("goodbye"))
        return "Goodbye! Have a great day!";

    else if (message.includes("see you later"))
        return "See you later! If you need any assistance, feel free to ask.";

    else if (message.includes("what are you") || message.includes("who are you"))
        return "I am a medical chatbot designed to assist you with healthcare-related queries.";

    else if (message.includes("what can you do") || message.includes("what else can you do")||message.includes("can you do") || message.includes("you can do"))
        return "I can provide information on various healthcare topics, assist with medical inquiries, and suggest relevant resources.";

    else if (message.includes("what is your gender"))
        return "As a chatbot, I don't have a gender. I'm here to assist everyone regardless of gender.";

    else if (message.includes("what do you like to eat"))
        return "I don't eat! But I enjoy processing and providing information to help you with your health concerns.";

    else if (message.includes("thanks") || message.includes("thank you"))
        return "You're welcome! If you have any more questions, feel free to ask.";

    else if (message.includes("good") || message.includes("well done") || message.includes("well") || message.includes("nice") || message.includes("excellent"))
        return "Thank you! I'm glad I could assist you.";

    else if (message.includes("be well"))
        return "Thank you! You too, take care of yourself.";

    else if (message.includes("be safe"))
        return "Thank you! Stay safe and healthy!";

    else if (message.includes("great") || message.includes("fantastic"))
        return "That's great to hear!";

    else if (message.includes("wonderful") || message.includes("awesome"))
        return "That's wonderful!";

    else if (message.includes("appreciate") || message.includes("grateful"))
        return "I appreciate your kind words!";

    else if (message.includes("thankful"))
        return "I'm thankful for your positive feedback!";

    else if (message.includes("pleasure"))
        return "The pleasure is mine!";

    else if (message.includes("you're the best") || message.includes("best bot"))
        return "Thank you! You're too kind!";

    else if (message.includes("glad") || message.includes("wow"))
        return "I'm glad I could help!";

    else if (message.includes("happy"))
        return "I'm happy to assist you!";

    else if (message.includes("delighted"))
        return "I'm delighted to be of service!";

    else if (message.includes("pleased") || message.includes("satisfied"))
        return "I'm pleased to hear that!";

    else if (message.includes("terrific"))
        return "That's terrific!";

    else if (message.includes("exceptional"))
        return "That's exceptional!";

    else if (message.includes("marvelous"))
        return "That's marvelous!";

    else if (message.includes("remarkable"))
        return "That's remarkable!";

    else if (message.includes("splendid"))
        return "That's splendid!";

    else if (message.includes("stellar"))
        return "That's stellar!";

    else if (message.includes("brilliant"))
        return "That's brilliant!";

    else if (message.includes("outstanding"))
        return "That's outstanding!";

    else if (message.includes("good work")|| message.includes("good job")|| message.includes("very well"))
    return "Thanks you! I am glad I could assist you.";

    else if (message.includes("pharmavogue") || message.includes("pharma vogue") || message.includes("pharmavouge") || message.includes("pharmavoge") || message.includes("pharmavoge") || message.includes("pharma vogue") || message.includes("pharmavougue") || message.includes("pharmavouge") || message.includes("pharma vouge") || message.includes("farmavogue")) 
        return "Pharmavogue is a sophisticated tool developed by our team. It allows users to input the name of a medicine and receive comprehensive information regarding its mechanisms of action and usage.";
    
    else
        return "I apologize, but I'm not equipped to assist with that inquiry.";
}
