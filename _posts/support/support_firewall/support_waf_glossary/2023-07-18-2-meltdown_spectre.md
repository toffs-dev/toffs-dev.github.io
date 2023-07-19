---
layout: post
title: Meltdown/Spectre
categories: [Support,Firewall]
---
# What is Meltdown/Spectre?
Meltdown and Spectre are new vulnerabilities found in Intel, AMD, Apple, and ARM processor chips. These vulnerabilities are caused by a serious design mistake in the affected chips, and the discovery of this issue has forced a redesign of Windows, Mac, and Linux operating system software to reduce the vulnerability and stop attackers from using it.

These vulnerabilities were found by researchers at Google’s Project Zero, a team that’s focused on finding security flaws before they can be used by attackers; as of now there are no known Meltdown or Spectre exploits in existence. Security teams at big tech companies like Apple, Intel, and Microsoft, as well as open-source Linux developers are now working hard to try and make sure that their processors and operating systems are safe before any harmful exploits.

# Who is affected by the Meltdown and Spectre vulnerabilities?
Except for a few cases, everyone with a PC and/or a smartphone is in danger. Google says that every device with an Intel processor chip made after 1995 is affected. AMD and ARM chips are more difficult to exploit, but they are also at risk.

# How to protect against the Meltdown/Spectre vulnerability?
Other than changing a PC’s processor, the only way to fix the vulnerability is to update the operating system. Apple secretly added a Meltdown patch to OSX in early December, while Microsoft released a Windows patch on January 3rd, and Linux developers are still working to make a patch.

A bad side effect of these Meltdown patches is that they will, on purpose, slow down the processing speeds of the computers using the patched OS. These slowdowns will affect performances by an estimated 5-30%, depending a lot on the kind of chip and the tasks being done.

# How do the Meltdown and Spectre vulnerabilities actually work?
Both Meltdown and Spectre are vulnerabilities caused by the execution of a special high-level code called “kernel code”, which runs only during a process called speculative execution.

# What is speculative execution?
Speculative execution can be explained with a metaphor. Imagine a hiker lost in the woods who finds a fork in the trail creating two similar paths; one path will get the hiker home, the other will not. Instead of waiting for another hiker to help her, she picks the path she thinks is most likely to get her home. At some point on the hike, she sees a trail marker, if that trail marker tells her that she’s on the right path, then she keeps going on that path and gets home. If the trail marker tells her she is on the wrong path, she quickly goes back and switches to the other trail, which is no worse than if she was still at the start of the trail waiting for help.

Many modern processors use a similar technique called speculative execution, where the CPU tries to guess what code needs to be executed next, and then does that code before being asked to do so. If the executed code turns out not to be needed, the changes are undone. This is meant to save time and make performance faster.

Reports on the Meltdown/Spectre vulnerability are saying that Intel CPUs may be doing speculative execution of code without needing important security checks. It may be possible to write software made to check if the processor has done an instruction that would normally be stopped by these security checks.

This wrong handling of speculative execution makes a CPU vulnerability which an attacker can use to get very sensitive data in kernel memory such as passwords, encryption keys, personal photos, emails, etc.

# So what’s a kernel?
A kernel is the program at the heart of a computer’s operating system. It has full control over the operating system and manages everything from start-up to the handling of memory. The kernel also sends data-processing instructions to the CPU (Central Processing Unit). Most CPUs are always switching between kernel mode and user mode.
What’s the difference between kernel mode and user mode?
In kernel mode, the CPU is running code that has unlimited access to the computer’s hardware and memory. This mode is usually reserved for the lowest-level and most trusted operations. Crashes that happen while the CPU is in kernel mode are potentially very bad; they can crash the whole Operating System.

In user mode, the code being run cannot access hardware or reference memory, instead it must ask system APIs (system APIs can do kernel-mode functions that user-mode software can request with the right permissions). User mode crashes are often isolated and fixable. Most code is run in user mode.

# Why does the Meltdown patch slow down performance?
The fix in the Meltdown patch involves a bigger separation of the kernel’s memory from user processes. This is done by a method called Kernel Page Table Isolation (KPTI). KPTI moves kernel mode operations into a totally separate address space from user mode operations. This means that it takes much more time to switch between kernel mode and user mode.

To explain this, imagine a food truck that only sells two items: hot dogs and cold lemonade. The worker inside the food truck can easily reach both the steamer with the hot dogs and the cooler with the cold lemonades, and business moves very fast. Now imagine the health inspector comes and requires the hot and cold foods to be kept in separate places. Now the worker can still reach the hot dogs, but has to leave the truck and walk down the street to get each lemonade. This would make the food truck’s line move much slower, especially if people are ordering a lot of lemonades. This is similar to how KPTI can slow down the performance of an operating system.

# What’s the difference between Meltdown and Spectre?
Both Meltdown and Spectre are vulnerabilities caused by the way processors handle speculative execution, but they are different in how they work and which types of processors are affected.

Meltdown only affects Intel and Apple processors and it can be used to leak information that gets exposed because of code that processors run during speculative execution. Meltdown is easier to use than Spectre and has been called the bigger risk by security experts. Luckily, Meltdown is also easier and more simple to fix.

Spectre affects Intel, Apple, ARM, and AMD processors and it can be used to actually make processors run code that they should not be allowed to run. According to the security experts at Google, Spectre is much harder to use than Meltdown, but it is also much harder to stop.