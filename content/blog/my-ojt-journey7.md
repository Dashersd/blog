---
title: "My OJT Journey at NCIP "
date: "2026-01-15"
dateEnd: "2026-01-23"
excerpt: "Week 7 "
---


![548e99ac-8e20-4f89-8a46-579b250c3e13.jpg](/blog-images/1769651582404-548e99ac-8e20-4f89-8a46-579b250c3e13.jpg)
![9166814b-946f-4928-8b86-4f32ab5e7235.jpg](/blog-images/1769651593847-9166814b-946f-4928-8b86-4f32ab5e7235.jpg)
![47d22f1e-3129-4abd-a875-f1da733f3394.jpg](/blog-images/1769651599491-47d22f1e-3129-4abd-a875-f1da733f3394.jpg)

## January 19, 2026

*Creating a Facial Recognition System*

Today, I officially started planning my Face Recognition and Emotion Detection project. I spent most of the day thinking about what kind of system I really wanted to build and how it could connect the camera with real-time AI processing.

I decided that the system should be able to access the user’s camera, detect faces, recognize a face using a reference image, and also identify facial reactions or emotions. I wanted it to feel interactive and smart, not just a simple camera app.

I chose React as the frontend framework because I’m comfortable using it and it’s suitable for building interactive UI components. For the AI side, I decided to use TensorFlow.js so that everything runs directly in the browser without needing a backend or database.

I listed down all the important functions the system should have, such as camera control, face detection, face recognition, emotion detection, visual overlays, and performance optimization. I also made sure to consider privacy, making sure that all face data stays local and is cleared when the page refreshes.

One challenge I realized today was understanding the difference between face detection and face recognition, and how emotion detection adds more processing load, especially on low-end devices. This made me think carefully about optimization and keeping the system lightweight.

Overall, today was about planning and defining the scope. I now have a clear idea of what the project will be and what features it should include. Tomorrow, I plan to turn these ideas into a more structured system prompt and start thinking about how to break the features into React components.


## January 20,2026

Today, I focused on organizing and refining the ideas I wrote down yesterday. I reviewed all the planned features and made sure they actually made sense together as one system. I didn’t want the project to feel too complicated, especially since it needs to run smoothly on low-end devices.

I spent time converting the feature list into a clear system prompt that could be understood by an AI coding assistant like Cursor. This helped me see the project from a bigger picture — not just as features, but as a complete system with clear goals and constraints.

I also thought more deeply about the emotion detection part. I realized that emotion recognition is not always 100% accurate, so it’s important to present it as a detected or dominant emotion rather than a guaranteed result. This made me more careful about how the UI should display emotions to users.

Another thing I reflected on today was privacy. Since this project uses a camera, I made sure the design emphasizes that all processing happens locally in the browser and that no images or data are stored permanently. This feels important, especially for user trust.

By the end of the day, I felt more confident about the direction of the project. The concept is now clearer, more realistic, and better structured. Tomorrow, I plan to start breaking the system down into possible React components and think about how the UI layout should look.

## January 21, 2026

*Turning Ideas into Structure*

Today was about starting to give the project a clearer structure. After spending the first two days planning and refining the idea, I felt ready to think more concretely about how everything would actually be built.

I focused on breaking the system down into possible React components. I imagined separating the camera view, face detection overlay, recognition results, and emotion display into their own sections so the app doesn’t feel messy or hard to manage. Thinking this way made the project feel more realistic and achievable.

I also thought about the user interface. I want the design to be simple and clean, with the camera feed as the main focus. The face box, name or status, and detected emotion should be easy to see but not distracting. I realized that good UI is just as important as the AI part.

Another thing I reflected on today was performance. Since real-time face and emotion detection can be heavy, I reminded myself to keep everything lightweight and optimized, especially because the project should work on low-end devices. This influenced how often detection should run and how much information should be displayed.

By the end of the day, I felt like the project was slowly moving from just an idea into an actual system design. Tomorrow, I plan to think more deeply about the user flow and how the system behaves from the moment the camera is turned on.

## January 22, 2026

*Thinking Through the User Flow*

Today, I focused on how a user would actually experience the system from start to finish. I imagined opening the application for the first time and what should happen step by step once the camera is turned on.

I thought about the flow starting with camera permission, then immediately showing the live feed, followed by face detection feedback like “Face Detected” or “No Face Detected.” From there, the system should smoothly transition into face recognition and emotion detection without confusing the user.

I also considered how much information should be shown on the screen at once. Showing too many details like confidence scores, emotions, and recognition results might overwhelm the user, so I realized the importance of keeping the interface minimal and readable.

Another thing I reflected on was error handling. If the camera permission is denied or no face is detected, the system should respond clearly and calmly instead of feeling broken. This made me appreciate how small UX decisions can affect how professional the app feels.

By the end of the day, I felt more confident about how the system should behave in real use. Tomorrow, I want to start focusing more on the technical side, especially understanding which TensorFlow.js models are best suited for face detection and emotion recognition.

## January 23, 2026

*Researching the AI Side*

Today, I spent most of my time researching the AI side of the project, especially how face detection, face recognition, and emotion detection work in TensorFlow.js. I wanted to understand what is realistically possible to run directly in the browser without making the app too heavy.

I learned that face detection and face landmarks are more lightweight compared to full face recognition, which helped me understand why optimization is so important. This made me more careful about how often detection should run and how many features should be processed at the same time.

I also looked into how emotion detection is usually handled. I realized that emotions are inferred from facial expressions and landmarks, not directly read from the face. This helped set realistic expectations for accuracy and reminded me that the system should always show emotions as estimates, not facts.

Another realization today was that model loading time matters a lot for user experience. If the models take too long to load, users might think the app is broken. This made me think about adding clear loading states and feedback while the models are being prepared.

By the end of the day, I felt more knowledgeable about the technical limitations and possibilities of TensorFlow.js. Tomorrow, I want to start thinking about how to combine all these models smoothly inside a React application.
