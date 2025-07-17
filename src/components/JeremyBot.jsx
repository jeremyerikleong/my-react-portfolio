import ChatBot from 'react-chatbotify';

function ChatBotHeader() {
    return (
        <div>
            <div className="bot-header">Jeremy Bot</div>
            <div className="bot-subheader">Ask me a question</div>
        </div>
    )
}

function JeremyBot() {
    // list of questions
    const helpOptions = ["I would like to extend a greeting.", "I am seeking for your previous portfolio.", "Can you send me your resume please?", "We are interested in offering you a position."];

    // config
    const settings = {
        general: {
            fontFamily: 'Inter, sans-serif',
            showFooter: false,
            showInputRow: false
        },
        chatWindow: {
            showScrollbar: true,
        },


        // chatbox bubble pop up
        header: {
            title: <ChatBotHeader />,
            avatar: "/assets/icons/jeremy-favicon.webp"
        },
        notification: {
            disabled: true
        },
        // before chat icon
        chatButton: {
            icon: "/assets/icons/jeremy-chatbot-typing.webp"
        },
        chatHistory: {
            disabled: true
        },
        chatInput: {
            disabled: true
        },
        emoji: {
            disabled: true
        },
        fileAttachment: {
            disabled: true
        },

        // tooltip for chatbot
        tooltip: {
            mode: "NEVER",
        }
    }

    // themes
    const themes = [
        { id: "simple_blue", version: "0.1.0" },
    ]

    // styles
    const styles = {
        headerStyle: {
            color: '#EAEAEA',
            background: '#303030',
            padding: '10px',
        },

        // bots
        botBubbleStyle: {
            background: '#343541',
            color: '#EAEAEA',
            // border: '2px solid #5d5f67'
        },

        botOptionStyle: {
            borderRadius: '10px',
            background: '#343541',
            color: '#EAEAEA',
            border: '2px solid #6969698e',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px 0px',
        },

        botOptionHoveredStyle: {
            borderRadius: '10px',
            border: '2px solid #d3d4d6ff',
            color: '#ffffff'
        },

        // users
        userBubbleStyle: {
            backgroundColor: '#323232',
            // border: '2px solid #595b5e',
            color: '#ffffff'
        },

        // chat
        chatWindowStyle: {
            backgroundColor: '#212121',
        },

        chatButtonStyle: {
            backgroundColor: 'transparent'
        }
    };

    // flow
    const flow = {
        start: {
            message: "Hello!",
            transition: {
                duration: 1000
            },
            path: 'next_line'
        },

        next_line: {
            message: "My name is Jeremy Bot, and I am here to assist you in Jeremy's absence.",
            transition: {
                duration: 1000
            },
            path: 'show_options'
        },

        show_options: {
            message: "How may I assist you today?",
            options: helpOptions,
            path: 'process_options',
        },

        prompt_again: {
            message: "Is there any additional assistance you require?",
            options: helpOptions,
            path: "process_options"
        },

        // fall back
        unknown_input: {
            message: `I apologize, but I am unable to comprehend your message. 😢`,
            options: helpOptions,
            path: "process_options"
        },

        // return this message if user opt to say hi
        say_hi: {
            message: 'Hello!',
            transition: {
                duration: 1000
            },
            path: "say_hi_2"
        },

        say_hi_2: {
            message: 'I hope you find my portfolio website engaging and informative.',
            transition: {
                duration: 1000
            },
            path: "prompt_again"
        },

        // return these message if user opt to hire me 
        prompt_hire_me: {
            message: 'Exciting Time! 🤓',
            transition: {
                duration: 1000
            },
            path: "prompt_mail_me"
        },

        prompt_mail_me: {
            message: 'Please feel free to send me a message, and we can discuss this further.',
            transition: {
                duration: 1000
            },
            path: "mail_me"
        },

        mail_me: {
            transition: {
                duration: 1000
            },
            function: () => {
                window.open('mailto:jeremythegreat95@gmail.com');
            },
            path: 'prompt_again'
        },

        // options output
        process_options: {
            transition: {
                duration: 0
            },
            chatDisabled: true,

            path: async (params) => {
                let link, cv = "";

                switch (params.userInput) {
                    case "I would like to extend a greeting.":
                        return "say_hi";

                    case "I am seeking for your previous portfolio.":
                        link = "https://v1.jeremyerikleong.com";

                        await params.injectMessage("Please hold on for a moment, and I will direct you shortly.");
                        setTimeout(() => {
                            window.open(link);
                        }, 4000)
                        return "repeat";

                    case "Can you send me your resume please?":
                        cv = "https://cv.jeremyerikleong.com";

                        await params.injectMessage("Sure, I'm happy to share my resume. I will direct you shortly for your review. Thank you for your interest!");
                        setTimeout(() => {
                            window.open(cv);
                        }, 4000)
                        return "repeat";

                    case "We are interested in offering you a position.":
                        return "prompt_hire_me";

                    default:
                        return "unknown_input";
                }
            },
        },

        repeat: {
            transition: {
                duration: 4000
            },
            path: "prompt_again"
        },
    }

    return (
        <div className="bot-container">
            <div className="bot-speech-bubble">
                <div className="bot-speech-bubble-dot-container">
                    <div className="bot-speech-bubble-dot"></div>
                    <div className="bot-speech-bubble-dot"></div>
                    <div className="bot-speech-bubble-dot"></div>
                </div>

                <span></span>
            </div>
            <ChatBot themes={themes} styles={styles} flow={flow} settings={settings} />
        </div>
    )
}

export default JeremyBot;