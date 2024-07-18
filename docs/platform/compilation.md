---
sidebar_position: 4
---

# Compilation

### Compiling using TWM

import comp from '/img/adminPanelCompile.png';
import attachToProcess from '/img/attachToProcess.png';
import compileWindow from '/img/compileWindow.png';

TWM allows users to create extendable modules such as custom strategies and indicators using C# code. The code for the custom project is located at `C:\Users\User\Documents\TWMCustom` by default. Users can to use an IDE such as Visual Studio Community or other to edit the code within this project and build their own custom strategies and indicators. The code can be can be compiled from within the IDE or from within TWM using the compile function located on top of every chart and in the Admin Panel menu.

<img src={comp} alt="Data Series Window" style={{width: 700}} />

### Debuging

Your TWMCustom project can be placed anywhere you like on your PC hard drive as long as the path to custom project is specified correctly. When you start TWM it will load the Custom project and print an appropriate message into the log. The path specifies where the custom project is loaded from. Use `Path to Custom Project` property to specify this in the options menu.

By default TWM will build the custom project in release mode. This means the DLL of the custom project that is required for TWM to run will be placed into `C:\Users\User\Documents\TWMCustom\bin\Release` folder. This also means that the `Path to custom project DLL` should point to this folder.

However, you might want to `debug` your project, set break points and inspect the code you write for your strategies and indicators. In order to do so you have to check the box `Compile in Debug` and point the `Path to custom project DLL` to `C:\Users\User\Documents\TWMCustom\bin\Debug`.

So overall there are 2 options. Either use the release version of the custom dll built without the box checked or user the debug version of custom dll with the comple in debug box checked. Please respect the path in either mode to point appropriatly as mentioned above.

We recommend using release version for faster execution especially during strategy optimization and large complex logic. Debug versions should mainly be used for debug purposes.

<img src={compileWindow} alt="Data Series Window" style={{width: 700}} />


To start debuging:
- Compile the Custom DLL apropriatly with compile in debug checked
- Point path to custom DLL to C:\Users\User\Documents\TWMCustom\bin\Debug
- Start IDE (Visual Studio)
- Open TWMCustom project and attach to process

<img src={attachToProcess} alt="Data Series Window" style={{width: 700}} />

### Reload Script on Recompile

If this checkbox is enabled TWM will reload all indicator and strategy scripts that are enabled after you press compile. This is usefull when developing new scripts. You do not have to re-enable them whilst working with code. However this can lead to unwanted situation if you have existing scripts running on your system and you want to add new ones.

For instance, you have a strategy trading and you do not want it to reload but you have written an additional strategy that you wish to turn on as well. In this case you will need to `uncheck` the reload script on recompile feature so that the running strategy is not affected when you ccompile your new script into the DLL. 

In the case above a new DLL will be used for the new strategy whilst the old DLL will be still running in the memory for the old script. When the old script is turned off, if enabled again it will start using the newly compiled DLL next time you load the script.