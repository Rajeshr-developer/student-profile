; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "scas"
#define MyAppVersion "1.5"
#define MyAppPublisher "My Company, Inc."
#define MyAppURL "https://www.example.com/"
#define MyAppExeName "my-app.exe"
#define MyAppAssocName MyAppName + " File"
#define MyAppAssocExt ".myp"
#define MyAppAssocKey StringChange(MyAppAssocName, " ", "") + MyAppAssocExt

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{5201B1FD-2702-4AA3-99F1-E9C1DE8C19EA}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
ChangesAssociations=yes
DisableProgramGroupPage=yes
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
OutputBaseFilename=scas
SetupIconFile=D:\Projects\my-app\build\favicon.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "D:\Projects\my-app\build\my-app\win32\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\credits.html"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\d3dcompiler_47.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\ffmpeg.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\icudtl.dat"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\libEGL.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\libGLESv2.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\node.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\notification_helper.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\nw.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\nw_100_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\nw_200_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\nw_elf.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\resources.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\v8_context_snapshot.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\vk_swiftshader.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\vk_swiftshader_icd.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\vulkan-1.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\Projects\my-app\build\my-app\win32\locales\*"; DestDir: "{app}\locales"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "D:\Projects\my-app\build\my-app\win32\swiftshader\*"; DestDir: "{app}\swiftshader"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Registry]
Root: HKA; Subkey: "Software\Classes\{#MyAppAssocExt}\OpenWithProgids"; ValueType: string; ValueName: "{#MyAppAssocKey}"; ValueData: ""; Flags: uninsdeletevalue
Root: HKA; Subkey: "Software\Classes\{#MyAppAssocKey}"; ValueType: string; ValueName: ""; ValueData: "{#MyAppAssocName}"; Flags: uninsdeletekey
Root: HKA; Subkey: "Software\Classes\{#MyAppAssocKey}\DefaultIcon"; ValueType: string; ValueName: ""; ValueData: "{app}\{#MyAppExeName},0"
Root: HKA; Subkey: "Software\Classes\{#MyAppAssocKey}\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\{#MyAppExeName}"" ""%1"""
Root: HKA; Subkey: "Software\Classes\Applications\{#MyAppExeName}\SupportedTypes"; ValueType: string; ValueName: ".myp"; ValueData: ""

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

