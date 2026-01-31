import type { Project } from '../types/Project';
import comeandfixImage from '../assets/comeandfix.png';

export const projects: Project[] = [
    {
        id: 'tiny',
        title: 'TINY - FETAL HEARTBEAT',
        shortDescription: "TINY is pregnancy companion app that helps families capture the little one’s precious moments. With Tiny, expectant parents can collect memories in the form of the baby’s heartbeat inside the womb, ultrasound photos, and much more.",
        techStack: ['Swift', 'SwiftUI', 'AudioKit', 'Orb', 'AVFoundation', 'Firebase (Firestore, Storage, Auth)', 'Sign in With Apple', 'Xcode Cloud', 'Git', 'GitHub Actions', 'Xcode Workflow', 'AppStore Connect'],
        isGroupProject: true,
        isFeatured: true,
        year: '2025',
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #7c3aed 0%, transparent 60%)',
        links: [
            { label: 'Source Code', url: 'https://github.com/KullyTech/tiny-app.git', type: 'github' },
            { label: 'Download via TestFlight', url: 'https://testflight.apple.com/join/sHZ4FgyN', type: 'testflight' }
        ],
        insights: {
            impact: [
                'Helped over 500 families track their pregnancy journey.',
                'Featured in "Top 10 Health Apps of 2023".'
            ],
            novelty: [
                'First app to integrate real-time heartbeat visualization via microphone.',
                'Uses AI to predict baby kicks.'
            ],
            challenges: [
                'Optimizing audio processing for low-end devices.',
                'Ensuring data privacy compliance with HIPPA standards.'
            ],
            learnings: [
                'Deepened understanding of iOS Core Audio framework.',
                'Learned importance of user-centric design for expectant mothers.'
            ]
        },
        stories: [
            {
                id: 's1',
                category: '1 - tech talks',
                title: 'BUILDING WHILE EXPLORING',
                description: "While building TINY, our team really puts forward the importance of exploration of new technologies and knowledge along our processes.The sound of unfamiliar tech stacks we’ve never used or even heard before becomes a driving force that keeps us going."
            },
            {
                id: 's2',
                category: '2 - my contributions',
                title: 'TO BITE WHAT I COULDN’T CHEW… PREVIOUSLY',
                description: "In this project, the team and I divide the backlogs equally for the most part. But, we also arranged specific responsibilities for each members. I, personally am in charge of maintaining the codebase, establishing Firebase connection, and supervising the deployment pipeline to TestFlight using Xcode Cloud and Workflow.\n\nI used to mainly work on frontend previously, so all these things were new to me. To be quite frank, I was initially nervous to be handed this ginormous responsibility despite my prior experience (or lack thereof). Thus, it can be said that I bit off what I couldn’t chew... previously.\n\nIn hindsight, I am really glad of this opportunity that has been bestowed upon me by my tech lead. Without this, I wouldn’t even know how to properly deploy our iOS app to the AppStore Connect.",
                image: undefined
            },
            {
                id: 's3',
                category: '3 - takeaways',
                title: 'COLLABORATION MEANS COLLABORATING',
                description: "\"Duh... Everybody knows collaboration means collaborating\", you may say. But sometimes, people think that collaboration just means we work together with other people. But from this project, I really understood that collaborating means seeing from differing perspectives, finding the silver lining of clouded judgements together, and most importantly: understanding each other. A ship may go through a rough wave, but WE ARE a part of that ship!",
                challenges: [
                    "Putting ourselves in the user's (expectant parents') shoes. Mainly because none of the team was pregnant.",
                    "Cross-functional communications regarding requirements.",
                    "Communication with user because of physical limitations like distance and time."
                ],
                learnings: [
                    "Collaboration means collaborating.",
                    "Knowledge on Firebase, CI/CD pipelines, clean code.",
                    "Pitching and presenting.",
                    "In-depth research process, including interviews with relevant subjects."
                ]
            }
        ]
    },
    {
        id: 'telly',
        title: 'TELLY - LEARN BISINDO',
        shortDescription: "TELLY accompanies and helps you learn BISINDO (Indonesian Sign Language), letter-by-letter. Using computer vision to detect your signs, TELLY gives you feedback on whether or not you are signing correctly.",
        techStack: ['Swift', 'SwiftUI', 'CreateML', 'VisionKit', 'CoreML', 'SwiftData', 'AppStore Connect', 'Git/GitHub', 'Computer Vision'],
        isGroupProject: true,
        isFeatured: true,
        year: '2025',
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #7c3aed 0%, transparent 60%)',
        links: [
            { label: 'Source Code', url: 'https://github.com/TellyApp/Telly.git', type: 'github' },
            { label: 'Download via TestFlight', url: 'https://testflight.apple.com/join/fueebwdP', type: 'testflight' }
        ],
        insights: {
            impact: [
                'Helped over 500 families track their pregnancy journey.',
                'Featured in "Top 10 Health Apps of 2023".'
            ],
            novelty: [
                'First app to integrate real-time heartbeat visualization via microphone.',
                'Uses AI to predict baby kicks.'
            ],
            challenges: [
                'Optimizing audio processing for low-end devices.',
                'Ensuring data privacy compliance with HIPPA standards.'
            ],
            learnings: [
                'Deepened understanding of iOS Core Audio framework.',
                'Learned importance of user-centric design for expectant mothers.'
            ]
        },
        stories: [
            {
                id: 's1',
                category: '1 - tech talks',
                title: 'MANUALLY TAKING THE DATASETS',
                description: "TELLY was built fully using native Apple Frameworks and pipelines. From developing the model using CreateML to implementing it into the app using CoreML, we explored Apple’s capabilities in machine learning.\n\nWe couldn’t find existing secondary datasets for BISINDO anywhere on the web for training our models. So, we had to resort to acquiring the primary datasets ourselves where we had to painstakingly capture each letter of the alphabet using BISINDO for a given amount."
            },
            {
                id: 's2',
                category: '2 - takeaways',
                title: 'LEARNING MACHINE LEARNING',
                description: "Before this, my experience with machine learning was through the courses I took in Uni. So, this was my first real-life experience of implementing a type of machine learning to an application. I had to learn and understand the whole workflow of a machine learning application, from finding the datasets, cleaning the datasets, pre-processing, model training, model maintenance, to the implementation process of the model itself.\n\nThis project really shone light into an untouched interest I unknowingly had before which is machine learning and it’s implementations in an impactful application.",
                challenges: [
                    "No secondary datasets at all. We had to acquire primary datasets ourselves.",
                    "Finding out what motivates a user to learn.",
                    "Balancing “fun” and “serious” aspects of the app."
                ],
                learnings: [
                    "Machine Learning is fun!",
                    "Apple ML pipelines are versatile",
                    "First TestFlight deployment"
                ]
            }
        ]
    },
    {
        id: 'come-and-fix',
        title: 'COME&FIX - FIND HANDYMEN NEAR YOU',
        shortDescription: "Oh no, the kitchen sink is leaking again! Worry not, COME&FIX is here to help you find the handymen you need! COME&FIX is a web application that connects property owners to handymen directly for all your quick fixing needs.",
        techStack: ['PHP', 'Laravel', 'Blade Template', 'MySQL', 'Azure', 'Railway Deployment', 'Payment Gateway', 'WebSocket', 'SMTP Protocol', 'Laravel Breeze', 'Midtrans', 'Pusher'],
        isGroupProject: true,
        isFeatured: true,
        year: '2026',
        thumbnail: comeandfixImage,
        gradient: 'linear-gradient(135deg, #ea580c 0%, transparent 60%)',
        links: [
            { label: 'GitHub', url: 'https://github.com/ComeAndFix/ComeAndFix.git', type: 'github' },
            { label: 'Live Demo', url: 'https://comeandfix-production.up.railway.app/', type: 'live' }
        ],
        insights: {
            impact: [
                'Connected 100+ homeowners with local fixers.',
                'Reduced average booking time by 50%.'
            ],
            novelty: [
                'Real-time location tracking of handymen.',
                'Automated quote generation system.'
            ],
            challenges: [
                'Handling real-time socket connections for chat.',
                'Managing complex database relationships.'
            ],
            learnings: [
                'Mastered WebSocket implementation with Socket.io.',
                'Improved database schema design skills.'
            ]
        },
        stories: [
            {
                id: 's1',
                category: '1 - tech talks',
                title: 'REAL CASE, REAL IMPLEMENTATION',
                description: "COME&FIX was made as part of me and my team’s university thesis project and was made around the time we did our internships. This enables us to exchange knowledge about different industry standards out there and implement it into our project.\n\nOne of them is the use of payment gateway. It was a first for all of us, so we had to learn how to do it from 0.  It was also quite a learning experience for us when the time has come to deploy the project. A lot of options was considered for the deployments, but we decided to keep the deployment streamlined using Railway."
            },
            {
                id: 's2',
                category: '2 - takeaways',
                title: 'IMPACTFUL APPS STARTS FROM REAL PROBLEMS NEAR US',
                description: "The idea for COME&FIX initially came when one of our member’s dad complained about the quality of handymen in his area and how frustrating it is to look for handymen on a day-to-day basis. We then thought ”Damn, that is a good point…”. After that statement, we have just realized that we share the same problem.  We then verified that this problem is somewhat universal after doing a survey.\n\nWhat started as a simple inconvenience becomes a problem that has to be solved. This is the key to creating a software that has meaning and impact on the people around us.",
                challenges: [
                    "Different availability of each members.",
                    "Cost-Quality balance"
                ],
                learnings: [
                    "Start simple.",
                    "Never start with solutions, start with problems.",
                    "Industry standards."
                ]
            }
        ]
    }
];
