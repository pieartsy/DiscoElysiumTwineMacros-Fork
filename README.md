# DiscoElysiumTwineMacros-Fork
Fork of [apeper's](https://github.com/apepers/DiscoElysiumTwineMacros) Disco Elysium Twine Macros (from the repository of the same name, and the updated repository here: [link](https://github.com/apepers/SweeterKindOfFire).

This is the most updated version that actually works! In this branch, I will give thorough documentation and explanation of how the code works. Note: a lot of the phrasing here is taken from apeper's wordings in her repository's documentation, with edits to reflect the edits I made for my fork.

The code here is a template for emulating and evoking Disco Elysium's stylings. There are no random elements coded into this sample branch; it evokes the appearance, not what's "under the hood" of Disco Elysium's dice rolls.

It was created in Twine using Sugarcube 2.33.2 and a set of custom macros. The intent of this branch is that you can use it as a jumping point for your own project with the same macros. If you know your way around Twine, Javascript, CSS, or HTML (or any combination of them!) you can try to edit it yourself to fit your own needs!

Thank you to ZA/UM for making Disco Elysium, the Disco Elysium fandom and discord server, and apepers for helping me with some code and creating the macros in the first place.

# Setting up your own Disco Elysium Twine fangame
## First, why Twine?
Twine is a tool for creating interactive fiction (IFiction) via hyperlinks (links). IFiction is any fiction where the player can significantly affect the course or outcome of events (roughly, it's hard to define). Usually it's associated with text-based games (think like Choose Your Own Adventure books, Zork, or Fallen London), but IFiction can have graphics as well - and Disco Elysium is *absolutely* IFiction.

Twine ([website here](twinery.org)) is a relatively simple program if you want it to be, but these macros make it rather more complicated (hence the documentation here!) Still, you don't need to be a coding whiz, or even know much coding at all, to get started in Twine.

## Getting the template - two options
Regardless of which of the options you pick below, you'll need all the images (saved in the `imgs` folder in the repository) saved in the same folder as your game.

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
    
Here, `<<AddOverlay` is used to call the macro. `int` is the first argument (the stat that will define the overlay color. `>>` closes things off so Twine knows that's the end of the macro. The Continue button will have a blue overlay on top of it.

An overlay appears on Disco Elysium's `COntinue` button before showing the passive check's results. You may notice an issue though: `AddOverlay` adds to the *following* continue button, not the previous button - that would mean the overlay appears after showing the passive check, instead of before.

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

### SetFlag
You can find this macro with the same title in the Twine app, or as `setflag.tw` when using Tweego should you want to edit it. It sets a flag, also known as a variable. You can use it to keep track of aspects of the game that are variable depending on which option you pick, as well as any items that the player picks up. It takes two arguments - the first is the name of the flag, and the second is the value stored in the flag.

The variable must already have been defined in `StoryInit`. You can add as many variables as you want there.

Example:

    <<SetFlag "flag" true>>
    
Here, `flag` is the first argument (the name of the flag) and `true` is the second (the value stored in the flag).

SetFlag also interacts with the AddOption macro.

### AddOption
You can find this macro with the same title in the Twine app, or as `addoption.tw` when using Tweego should you want to edit it. This is how we give the player options and make things truly interactive. The `AddOption` macro can take in several arguments (6 of them!) and is extremely modular. The first argument is the text of the option, and the second argument is the passage the option sends you to. That's the bare minimum you need to create an option.


