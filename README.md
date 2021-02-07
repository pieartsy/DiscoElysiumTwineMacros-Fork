# DiscoElysiumTwineMacros-Fork
Fork of [apeper's Disco Elysium Twine Macros](https://github.com/apepers/DiscoElysiumTwineMacros) (from the repository of the same name, and the updated repository here: [link](https://github.com/apepers/SweeterKindOfFire)).

This is the most updated version that actually works! In this branch, I will give thorough documentation and explanation of how the code works. Note: a lot of the phrasing here is taken from apeper's wordings in her repository's documentation, with edits to reflect the edits I made for my fork.

The code here is a template for emulating and evoking Disco Elysium's stylings. There are no random elements coded into this sample branch; it evokes the appearance, not what's "under the hood" of Disco Elysium's dice rolls.

It was created in Twine using Sugarcube 2.33.2 and a set of custom macros. The intent of this branch is that you can use it as a jumping point for your own project with the same macros. If you know your way around Twine, Javascript, CSS, or HTML (or any combination of them!) you can try to edit it yourself to fit your own needs!

Thank you to ZA/UM for making Disco Elysium, the Disco Elysium fandom and discord server, and apepers for helping me with some code and creating the macros in the first place.

# Setting up your own Disco Elysium Twine fangame
## First, why Twine?
Twine is a tool for creating interactive fiction (IFiction) via hyperlinks (links). IFiction is any fiction where the player can significantly affect the course or outcome of events (roughly, it's hard to define). Usually it's associated with text-based games (think like Choose Your Own Adventure books, Zork, or Fallen London), but IFiction can have graphics as well - and Disco Elysium is *absolutely* IFiction.

Twine ([website here](twinery.org)) is a relatively simple program if you want it to be, but these macros make it rather more complicated (hence the documentation here!) Still, you don't need to be a coding whiz, or even know much coding at all, to get started in Twine.

## Getting the template - two options
The template has all the macros and other code needed to emulate Disco Elysium's style in Twine. It also has a few story examples from my WIP fangame, __Jamais Vous__ for reference. Regardless of which of the options you pick below, you'll need all the images (saved in the `imgs` folder in the repository) saved in the same folder as your game.

### Simple option - No Tweego or command line, uses the Twine desktop app
You will need a recent version of the Twine desktop application (which you can download on the aforementioned website). Download `sample.html` and import it into Twine. This is great if you want to just mess around with the macros in the visual editor without using more programmatic tools!

Make sure to download all the images (saved in the `imgs` folder in the repository) and place them in the same folder as your game (otherwise the game won't have any of those cool overlays or effects!)

You'll notice a lot of writing contained within forward slashes and asterisks, like this `/*text*/` - these denote comments to explain how the code works.

### A step up - Tweego, command line, a code/text editor
Tweego is a tool for Twine that's a bit more powerful than the app - it allows you to use a code or text editor (like notepad, *not* MS word or Pages), collaborate with other people, host your game using Github Pages, use more program-focused features, and split up the parts of your project into different folders for easier reading and editing over time. It *does* use the command line, which can be intimidating, so no shame if you want to use the simple option for now!

To install and automatically add Tweego to your path (able to be used anywhere within your computer), follow the installation instructions here: [link](https://github.com/ChapelR/tweego-installer). If you want to collaborate by using Github Pages, please read apeper's tutorial here: [link](https://github.com/apepers/DiscoElysiumTwineMacros/blob/master/TweegoInstructions.md).

You'll also need to download the repository - click the green button on the top right that says `code` and select `Download Zip`. Unzip the file - this folder will be the one you'll work in.

Lastly, you need to have a text/code editor - I recommend VSCode because it has a Twee syntax highlighter (which you can find as an extension). It also allows you to use VSCode tasks if you want, for smoother compiling (turning the files into a game). Check out that optional tutorial here [link](https://github.com/JoshuaGrams/tiny-qbn/blob/master/doc/tweego.md).

## Using the custom macros
### First, what is a macro?
A Twine macro contains a bundle of code that's frequently used in the game, so you don't have to copy and paste a bunch of code every single time you want an effect to happen (for any coders out there, it's basically a function). There's several existing Twine macros that you can find documentation for in the Sugarcube 2 docs here: [link](http://www.motoslave.net/sugarcube/2/docs/) but these are custom macros (or widgets, within the code) that apepers built and I added onto to emulate the style of Disco Elysium.

Macros often (but not always) take things called **arguments**, which are passed into the macro and processed, spitting out an end result based on the argument.

### AddParagraph
You can find this macro with the same title in the Twine app, or as `addpara.tw` when using Tweego should you want to edit it. It adds paragraphs and dialogue, and you'll probably be using it the most. There are two arguments that you're going to use - the first one is for the text of the paragraph, and the second one (which is optional) determines the speaker of the dialogue, if any. If you don't add a second argument, then it will be a standalone paragraph without a speaker.

After every instance of this macro being used, a `Continue` button will pop up that the user will have to click to move to the next paragraph. Keep this in mind when you write so you can pace well!

An example beginning of a passage would be:
    
    <<AddParagraph "\"Hey, this is Aster!\" says the developer." "Aster">>
    <<AddParagraph "\"I hope you have an easy time using this template!\"">>

Here, `<<AddParagraph` is used to call the macro. `"\"Hey, this is Aster!\" says the developer.` is the first argument (the text of the paragraph) and `"Aster"` is the second argument (the speaker). `>>` closes things off so Twine knows that's the end of the macro. Note that in the second example, only one argument, `\"I hope you have an easy time using this template!\"` is used, so that paragraph won't have a speaker.

Note: If an argument contains text, then you need to put it in double-quotes. If you want to have dialogue, you will need to escape any double quotes you wish to appear in the text itself, `\"Like so\"`. (Escaping a character in Twine means that it's counted as plaintext/part of the visible writing, not part of the code itself).

### AddSkillParagraph
You can find this macro with the same title in the Twine app, or as `addskillpara.tw` when using Tweego should you want to edit it. Very similar to `AddParagraph`,  but the speaker (the second argument) is a skill instead. The skill is automatically formatted with the color of its associated stat. It can optionally simulate a passive check, which uses a few more arguments for the difficulty, and whether the check was a success or failure.

An example of a normal skill chiming in:

    <<AddSkillParagraph "Logical response" "Logic">>

Here, `<<AddSkillParagraph` is used to call the macro. `"Logical response"` is the first argument (the text of the paragraph) and `"Logic"` is the second argument (the skill). `>>` closes things off so Twine knows that's the end of the macro. Logic here is automatically styled with INT's blue color.

An example of a passive check:

    <<AddSkillParagrah "Logical response" "Logic" "Heroic" "Success">>
    
Here, `<<AddSkillParagraph` is used to call the macro. `"Logical response"` is the first argument (the text of the paragraph), `"Logic"` is the second argument (the skill), `Heroic` is the third argument (the difficulty of the check), and `Success` is the fourth argument (whether it was a success or failure). `>>` closes things off so Twine knows that's the end of the macro. `Logic` here is automatically styled with INT's blue color, and `Heroic` and `Success` will appear in grey as `[Heroic: Success]`.

Speaking of passive checks -

### AddOverlay
You can find this macro with the same title in the Twine app, or as `addoverlay.tw` when using Tweego should you want to edit it. It's fairly simple, and will add an overlay to the following `Continue` button in the text. It only uses one argument, to determine the overlay color.

An example of adding an overlay:

    <<AddOverlay "int">>
    
Here, `<<AddOverlay` is used to call the macro. `int` is the first argument (the stat that will define the overlay color). `>>` closes things off so Twine knows that's the end of the macro. The Continue button will have a blue overlay on top of it.

An overlay appears on Disco Elysium's `Continue` button before showing the passive check's results. You may notice an issue though: `AddOverlay` adds to the *following* continue button, not the previous button - that would mean the overlay appears after showing the passive check, instead of before.

Luckily I created a sort-of-workaround for this -

### NoOverlay
You can find this macro with the same title in the Twine app, or as `noOverlay.tw` when using Tweego should you want to edit it. This macro, which takes no arguments, is a "buffer" to make sure that the overlays added with `AddOverlay` appear before successful passive checks, rather than after. As a rule of thumb, you should put this at *every* paragraph *other than* the starting paragraph of a passage (except for before a successful passive check, where you'd just use `AddOverlay`). If you don't add it, then the overlays tend to show up in weird places.

However, it's a rule of thumb. Add or delete this buffer macro as needed so that overlays show up in the correct spot before successful passive checks (or if you have a better workaround, feel free to fork this or tell me what your solution is!)

Type this to use `NoOverlay`:

    <<NoOverlay>>
    
In a passage:
    
    <<AddParagraph "Start of passage" "Aster">>
    
    <<NoOverlay>>
    <<AddParagraph "Passage with no overlay on continue">>
    
    <<AddOverlay "int">>
    <<AddSkillParagraph "Passage with overlay on continue!" "Conceptualization" "success" "easy">>

### Green Text: Items, Tasks, Thoughts, Levels
You can find these macros in a passage with the same title in the Twine app, or as `greentext.tw` when using Tweego should you want to edit it. Besides dialogue, a common feature in Disco Elysium is "green text" passages - gaining and losing items, gained Thoughts, new and completed Tasks, and leveling up. While there isn't support for the full UI, we can at least replicate these features in text. The syntax for them is pretty straight forward:

    <<ItemGained "Blue oblong pen">>
    <<ItemLost "Your dignity">>
    <<NewTask "Make it up to Kim">>
    <<ThoughtGained "Stereo-partnership">>
    <<TaskComplete "Get Kim alone" 5>>
    <<SecretTaskComplete "Allow multiple tasks completed at once" 15>>
    <<LevelUp>>

The numbers after `TaskComplete` and `SecretTaskComplete` indicate how much XP you want displayed as gained.

### SetFlag (optional macro)
You can find this macro with the same title in the Twine app, or as `setflag.tw` when using Tweego should you want to edit it. It sets a flag, also known as a variable. You can use it to keep track of aspects of the game that are variable depending on which option you pick, as well as any items that the player picks up. It takes two arguments - the first is the name of the flag, and the second is the value stored in the flag.

Example:

    <<SetFlag "flag">>
    
Here, `flag` is the first argument (the name of the flag), which will automatically be added to the array, or list, of flags.

`SetFlag` and flags in general are used with the `if` macro, which is built into Sugarcube. You can find more info about `if` and other control macros at the Sugarcube docs: [link](http://www.motoslave.net/sugarcube/2/docs/#macros-control). In this code, the if statement will look something like this:

    <<if $flagsArray.includes("Flag")>>
        <<AddParagraph "Flag is here!>>
    <</if>>
    
`<<if` is the start of the `if` macro. `$flagsArray` is a variable in the `StoryInit` passage that stores all of your flags, and does not change. `Flag` is the flag, and must be in quotes. `>>` closes the first statement. With this line, you're checking to see if `Flag` is in the `flagsArray` list, and if so, to show the contents within the `if` macro - here it's `<<AddParagraph "Flag is here!>>` Then write `<</if>>` to indicate the end of the macro.

Feel free to skip this macro if things like if/else statements and variables are too programmatic for your purposes.

`SetFlag` also interacts with the `AddOption` macro.

### AddOption
You can find this macro with the same title in the Twine app, or as `addoption.tw` when using Tweego should you want to edit it. This is how we give the player options that influence the outcome, and thus make the game truly interactive. The `AddOption` macro can take in several arguments (5 of them!) and is extremely modular. The first argument is the text of the option, and the second argument is the passage the option sends you to. That's the bare minimum you need to create an option.

Example option:
    
    <<AddOption "option" "New passage">>
    
Here, `<<AddOption` is to call the macro. `option` is the first argument (the text of the option) and `New passage` is the second (the passage the option sends you to). `>>` closes things off so Twine knows that's the end of the macro.
    
You can simulate a white check with the third argument being the skill the player is "rolling", and the fourth argument being the difficulty level. This will add the white background styling to the option, similar to the styling in Disco Elysium that indicates a white check option.

Example option with a white check:

    <<AddOption "option with a check" "New Passage" "logic" "easy">>

You can set flags with `AddOption`, since it interacts with the `SetFlag` macro. This means that when you click on the option, the flag is set along with it. The flag is set with argument three being the flag, and argument four being the value you're setting the flag to be.

Example option with a flag and a white check:

    <<AddOption "option with a flag and check" "New passage" "logic" "easy" "flag">>
    
Here, `logic` is the third argument (the skill) and `easy` is the fourth argument (the difficulty level).

If you want to add an option that sets a flag but doesn't have a check, you have to put empty values (not spaces, just nothing) for the third and fourth arguments.

Example option with just a flag:

    <<AddOption "option with just a flag" "New Passage" "" "" "flag">>

Here, the third and fourth arguments are completely empty, with the double quotes being placeholders of sorts. While this makes it a bit more inconvenient if you want to use flags, variables and if/else statements in your code, if you don't want any programmatic elements like that, you can just not include that argument.

However many options you add, they will all be listed at the bottom of the page without any further calls on your part. The downside of using macros for this is that you will not automatically get a visual link between passages in Twine. If you would like that feature and are using the Twine app, just create a matching empty link to the correct passage immediately after the option, like so:

    <<AddOption "It's annoying, but it works!" "SorryDevPassage">>[[|SorryDevPassage]]

Now you'll see the link in Twine, but because the text is empty it won't mess with any clicking.

### CheckSuccess and CheckFailure
If you have added an option with a simulated Skill Check, you can add a `<<CheckSuccess>>` or `<<CheckFailure>>` to the beginning of the passage the player is sent to. These replicate the experience of succeeding or failing a check, with a little overlay and a green or red screen flash.

Within passages:

    <<CheckSuccess>>
    <<AddParagraph "You succeeded!">>
    
or

    <<CheckFailed>>
    <<AddParagraph "You just got got...">>

## The rest of this documentation
...has been thoroughly described by apepers* so please visit her repository starting here: [link](https://github.com/apepers/DiscoElysiumTwineMacros#whitespace) so I don't have to copy and paste/plagiarize her wording any more than I already have. In that repository, there are also several other good articles she and kawa-kitsuragi ([kawa's github link here](https://github.com/kawa-kitsuragi)) wrote about Twine tips, collaboration using Github and Tweego, and the Disco Elysium writing style.

*note that in the section, **Adding your own skills and attributes**, what apepers is referring to as `PassiveSkill`, I've restructured as `AddSkillParagraph`.

I hope yall find this useful! If you make something with my forked macros, feel free to share it with me. If you're confused, also feel free to share it with me, and I'll try to be clearer in the documentation.
