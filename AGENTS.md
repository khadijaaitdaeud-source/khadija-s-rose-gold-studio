# Architecture rules
- Keep new portfolio visual metadata in dedicated typed data modules and render detailed explanations through the shared accessible dialog; this allows future projects without altering legacy cards.
- When a project explicitly requests the legacy HOLIVA/VERALIS presentation, use the existing gallery renderer with typed title and caption data without detailed dialogs; this preserves the requested interactions exactly.
- Reference uploaded portfolio originals through Lovable Assets JSON pointers; this preserves original media without adding binary files to source control.