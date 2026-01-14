1. Share one aspect of building this project you found challenging and how you overcame it.

I found it challenging finding a way to parse user data, I wanted it to be like a terminal type of command line interface rather than a Text-based GUI sort of thing, so I found it challenging figuring out how it would work, initially all spells were going to be functions and a user would put like 'confide mom' and I would use `eval` to execute confide and spread the remaining text as parameters. But that's not practical as `eval` becomes overused and risky. Instead, I blocked of `eval` to only be used in specific contexts like for the order or console logging strings

2. Share one technical concept that you gained a deeper understanding of through building this project. Explain that concept in simple terms and explain how it is used in your project.

Gained insight more in async functions for the loading part, as well as how while(true) loops can really mess things up (initially I tried doing `setTimeout` and a loop for loading animation, however while loops take precedence and override runtimes).