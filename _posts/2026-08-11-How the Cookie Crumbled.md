---
title: "How the Cookie Crumbled — Write Up"
date: 2026-08-11
---

This "baby's first" write-up covers my first public vulnerability discovery,
In July 2026 on a third party service vendor platform ("The Vendor").
Identifying information has been substituted for privacy.

### People involved

**Discovery team:** Me (coordination, write-up,
disclosure), Trent (initial discovery and notification),
Ajay (technical investigation and reproduction) and Finn
(vetting, verification and support)

**Vendor / platform staff:** anonymised — referred to below by role
only (Technical Lead, initial contact)

**University staff:** anonymised — referred to below by role only

### Incident Summary 
Roughly midday in late July an event registration opened on The Vendor's website, 
A sudden spike in concurrent logins triggered a caching error that caused one team member to be logged into the account of an uninvolved, unrelated user.
Having accidentally gained access to this account, the
team began a proper investigation. The vulnerability was patched
roughly four hours after discovery and two hours after the Vendor
was notified. The affected account holder is referred to below as
"the affected user"

### Vulnerability findings

- Session cookies were implemented via a common Ruby on Rails
  session-cookie pattern.
- A quirk of this implementation meant session cookies did not
  expire on their own, making session hijacking straightforward once
  a token was captured.
- Refreshing, logging out, or starting a new session did not
  invalidate the previous token, even after repeated reissues.
- Resetting the account password was the only action that
  invalidated all existing tokens.
- Root cause: a misconfigured caching layer that, under high load,
  cached the `Set-Cookie` header belonging to the first user to miss
  cache for a given resource. That cached cookie was then served to
  other users requesting the same resource, silently switching their
  browser session to the original user's session.

### Steps to reproduce

- Modifying the "last login" resource value in the browser's network
  tab was sufficient to trigger continued unauthorised access to an
  account.
- Substituting the platform's session cookie with any previously
  captured user's cookie value granted unlimited access to that
  user's account, with no expiry.
  
### A few takeaways from running this disclosure:

- Escalating to a trusted authority above you (in this case,
  university staff) early is valuable, even while the technical
  investigation is still ongoing, it created a paper trail and
  moved things along faster than going directly to the vendor cold.
- Having a clearly formatted, complete write-up ready *before*
  reaching out to a company is worth the extra hour it costs, a
  half-finished report shared under pressure led to a lot of
  confusion and repeated requests for basic clarifying information.
- Small teams often don't have a public or easy to find security contact
  For disclosures like this.
  
  This falls under **CWE-524 (Information Exposure Through Caching)**.
  
