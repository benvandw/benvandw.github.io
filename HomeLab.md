---
layout: default
title: HomeLab
---
*Last updated: 3rd September 2026*

*** This page is under construction, come back later for more! ***

A bit of a dive into what I'm running at home, why, and what I'm thinking of doing next.

## Infrastructure

I run two main nodes, both powered via [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment/overview).

One is a fully custom gaming-like rig running a newer-gen AMD CPU and some DDR5 RAM I scooped up just before the RAM crisis!

The second node is an old ex-enterprise ThinkCentre Mini. This one is a bit of a Frankenstein of harvested parts out of another similar system that died, and Facebook Marketplace's Finest selection of second-hand parts.

These hook up to my micro-fleet of old Frankensteined laptops, my main personal desktop, and my Primary and Secondary laptops. All devices are running a diverse selection of Linux-based OSes (Fedora, Ubuntu, Arch, Rocky, etc.).

My devices are all supported via a 2.5Gb LAN network, a NAS, and a bunch of smart gear that has been locked to [Home Assistant](https://www.home-assistant.io/) and kept off internet access to avoid an extra footprint.

## Home SOC

My Home SOC is a bit of a passion project, running a ridiculously overkill stack for the number of devices being monitored.
<p align="center"><img src="/assets/img/homelab-soc-architecture.png" alt="HomeLab Logical Layout"></p>
All the tools, software and other bits and bobs are open source or open-source derived, thanks to [Catalyst IT](https://catalyst.net.nz) who encouraged me to stick with the community and who very generously gave me one of [3 Open Source Scholarships](https://www.catalyst.net.nz/candc-careers/candc-open-source-scholarships) this year!

Down the road (once RAM prices go down or I can pick up another second-hand mini PC) I'm looking to add in the following tech!

 - [Security Onion](https://securityonionsolutions.com/) for network scanning too
 - [Ansible](https://www.ansible.com/) for automated configuration updates
 - [TheHive](https://thehive-project.org/)'s [Cortex](https://github.com/TheHive-Project/Cortex) for added enrichment
 - The Australian Cyber Security Center's [Azul](https://github.com/AustralianCyberSecurityCentre/azul) malware analysis toolkit, for some serious tinfoil hat stuff
 - I've got a bunch of old Cisco gear that I'm looking to set up as a "legacy" or [honeypot](https://en.wikipedia.org/wiki/Honeypot_(computing)) environment
 - [SpiderFoot](https://www.spiderfoot.net/) an [OSINT](https://en.wikipedia.org/wiki/Open-source_intelligence) and intel platform
 - [MISP](https://www.misp-project.org/), the malware information sharing platform
 - Maybe [HashiCorp Vault](https://www.vaultproject.io/) to make secrets a bit better managed
 - Maybe [CAPEv2](https://github.com/kevoreilly/CAPEv2) and [Velociraptor](https://docs.velociraptor.app/) for some more scanning
 - And I'm scoping out [Fleet](https://fleetdm.com/) for some slightly more turnkey fleet management to complement Wazuh and Ansible
 - If you have more ideas, let me know! My goal is to outperform some enterprise environments for no provider costs.


<p align="center"><img src="/assets/img/planned-HomeLab.png" alt="HomeLab Future Layout"></p>
