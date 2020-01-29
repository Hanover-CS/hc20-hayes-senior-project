# CS-Senior-Project
# Brian Hayes
# 2019 - 2020
How to run game.

Things you'll need...
1) Be able to run a basic html server from your terminal.
2) An internet Browser.

What to do...
1) Clone or download the game files from gitHub onto your lapTop/Desktop.
2) Open a seperate window and navigate to the game files. Go into the file 
   labled "CS-Senior-Project"
3) Copy the file path to your clip board.
4) Open the command terminal and navigate to the "CS-Senior-Project" folder using the 
   file path you copied.
5) After navigation, start your html server at that location. Make note of your
  server address as you will need this later.
6) Repeat step 3 but go into the file labled "HTMLPages" and use your prefered browser
   to open "MasterHTML.html" if you would like to play the game or open "HTMLTests.html"
   if you would like to run the tests.
7) Once the desired page is open in the browser go to the serch bar of that page. Currently it
   will be the file path. (Example: file:///C:/Users/brian/OneDrive/Documents/GitKraken/Senior%20Project/CS-Senior-Project/HTMLPages/   MasterHTML.html). Delete "file:///C:/Users/brian/OneDrive/Documents/GitKraken/Senior%20Project/CS-Senior-Project" and leave alone
   /HTMLPages/MasterHTML.html. Now take your server address and place it before the undeleted portion of the link like so
   ServerAddress/HTMLPages/MasterHTML.html. (Example: http://127.0.0.1:8080/HTMLPages/MasterHTML.html)
8) Same thing with the tests html page.

Trouble Shooting...

1) Google Chrome is the browser this game was developed with. Problems could occure if used with other browsers.
2) If error message appears after page is loaded with http server address the server address if too far back in
    the links path. (Example: http://127.0.0.1:8080/CS-Senior-Project/HTMLPages/MasterHTML.html)
3) If the server address has been placed too far forwards the page that loads will have no CSS file to structure
    itself with. (Example: http://127.0.0.1:8080/MasterHTML.html)
4) If the links path is not correct the test file will not show or run the full asortment of tests.

Playing the Game.

Character Creation menu.

    Displayed on the first screen you will see two Input areas and one submit button.
    you first start with the bar that asks for your name. this will be the name of your character.
    then you will use the dropdown menu below it to select a character. and press submit. 

Character Page.

    Here you will see many things. Centered on your screen will be your bag (inventory) wich will be
    Empty at the moment, and to the right of that will be your equipped items (also empty). To the right of the screen 
    your character and all of its stats are displayed. The top left of your screen there is a small box, once clicked
    a menu will appear that will allow you to navigate to two other menues. First is the character creation menu (this will 
    allow for the creation of a new character) The second is the shop. On the bottom left corner there is an Ascend button which will allow you to begin combat.

Shop.

    In the shop there are two tabs, Level up menu (the default menu) and Buy Menu. you can navigate to each using the
    Menu tabs. In the level up menu there is a button labled "Level Up" you can use this up to level up your character once the 
    experience poitn requirement is met. this will open a window for you to assign various level up points via buttons corrisponing to 
    each.

    In the buy tab there is a left window with vairous buyable items. you may select one, once you have enough money, and buy it. this will place the item into your bag. (this will allow you to equip said item back on the Character Page) You may also use the bag
    window to select an item and sell it.
    
Tower.

    Inside the tower there are three buttons (Attack and decend while there is an enemy present and Ascend and Descend when there is
    no enemy). Attack will attack the present enemy, Descend will reset your progress up the tower and take you to the Character page,
    and Ascend will move you on to the next enemy.