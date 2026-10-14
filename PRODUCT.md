# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: government administrators.** LSGD officials operating K-SMART day to day — secretaries (administrative heads of a local self-government institution), department heads, and higher-level district/state officials monitoring the local bodies under their jurisdiction. Their job is to see where files are piling up, which services are breaching delivery timelines, and which local bodies or seats are underperforming, so they can intervene.

**Secondary: citizens.** The dashboard is publicly reachable (it carries Register/Login, an About K-smart link, and a Malayalam/English toggle) and serves a transparency purpose: letting the public see how efficiently public services are being delivered. Citizens are not the optimisation target, but the surface must stay readable to them — domain jargon (SLI, disposed, parked, seat) cannot be assumed knowledge.

Usage is **mixed desk and mobile**: officials at office workstations, plus field staff and officials checking status on phones. Layout must be genuinely responsive, not desktop-first with a mobile afterthought.

## Product Purpose

K-SMART (Kerala Solution for Managing Administrative Reformation and Transformation) is the unified e-governance platform built by Information Kerala Mission (IKM) for the Local Self Government Department, Government of Kerala. It digitises the operations of local self-government institutions across 23+ functional modules.

This dashboard is the analytics layer over that platform. K-SMART captures operational data through thousands of independent transactions daily, but without a centralised view, administrators cannot tell how the system as a whole is performing. The dashboard exists to answer questions like: how many files are pending, which local bodies carry the heaviest workload, which services run longest, which employees hold the most overdue files, and which bodies meet their service-level targets.

Success is decision-making that becomes proactive rather than reactive — bottlenecks identified before they affect citizens.

## Positioning

Operational truth drawn from the system of record itself. Because every citizen request becomes a File inside K-SMART and every movement of that file is recorded, the dashboard reports real processing behaviour across every local body in Kerala rather than self-reported or sampled figures. A neighbouring analytics product could not truthfully claim the same lineage.

## Operating Context

**Administrative hierarchy:** Government of Kerala → LSGD → District → local bodies (Grama Panchayat, Municipality, Municipal Corporation) → Secretary → Department Heads → Employees (clerks, engineers, health inspectors, revenue officers, overseers, accountants). Block and District Panchayats exist but are deliberately excluded from the dashboard's global filter.

**The File is the central object.** Nearly every citizen request becomes a File — the digital equivalent of the paper file that used to move between departments. Two kinds: *Citizen Files* (birth/marriage registration, building permission, trade licence) and *Other Files* raised internally (salary processing, employee transfer, department change).

**File lifecycle:** citizen submits → application validated → file created → assigned to a responsible employee → documents reviewed → forwarded to another officer if required → secretary/competent-authority approval → certificate or permit generated → file closed. A file may pass through multiple employees, departments and approval levels; every movement is auditable.

**Modules relevant to this project:** Civil Registration (birth, death, marriage), Finance Management (E-POS and E-Payment success/failure), Meeting Management, Building Permission (applications, technical scrutiny, inspections, approvals, occupancy certificates), Business Facilitation, Property Tax (assessment, collection, arrears), and Public Grievance and complaints.

## Capabilities and Constraints

**Confirmed functionality:**
- Context selection: local body/state drill-down, time-period selection, and cascading Module → Sub-module → Service filtering
- File-status KPIs: Total Received, Disposed, Under Process, Delayed — each split into Citizen vs Other files, each opening a drill-down modal
- Per-module analytics views, including a DCB (Demand/Collection/Balance) view for Property Tax and a Digital Health view comparing transaction channels (citizen profile, quick pay, office counter, E-POS)
- Seat-level detail for analysing individual administrative roles/desks
- Data export
- A Generate Report surface for Building Permission with its own filter set and 12-column results table

**Terminology that must be used consistently:** Local Body, File, Service, Module, Employee, Secretary, Pending File, Overdue File. Operational metrics: Total Files, Disposed (completed), Under Process (open, not closed or on hold), Delayed (exceeded the delivery period), Parked (on hold), SLI (delivery time of a file).

**Constraints:** bilingual English/Malayalam surface — Malayalam strings are materially longer than English in places, so layouts cannot assume English text metrics. Module availability varies by local body type.

## Brand Commitments

- **Name and marks:** K-SMART, shown alongside the Government of Kerala emblem and the LSGD logo. The department line reads "Government of Kerala / Local Self Government Department".
- **Palette (binding):** brand navy `#09327b` and `#0c3080`, deep ink `#232f50`, brand pink `#e83a7a` (CTAs, required markers), cyan `#00b2eb`, muted text `#5c6e93`, page background `#f2f6ff`, hairline borders `#e8eff4`.
- **Typeface:** Manrope.
- **Language:** English and Malayalam, user-switchable.

These are preserved across versions. V2 is a layout and accessibility redesign, not a rebrand.

## Evidence on Hand

- Domain specification: Notion page "Dashboard 3.0 Design Spec" (K-SMART domain model, file lifecycle, metrics, module list, terminology, problem statement).
- Visual reference: Figma file `jTCSbMNhtiXgkwuSw4ZMBg` (DFMS — Dashboard 3.0); node `24392-151` specifies the Building Permission report surface.
- Running V1 implementation in `src/app/App.tsx` and its module components.

**All figures in the prototype are mock data** (`src/app/data/`), including the seeded building-permit records and every KPI value. No real operational statistics, performance benchmarks, named officials, or citizen records are present. Future work must not present any of these numbers as real, nor invent new ones framed as actual government performance.

## Product Principles

1. **Operational decisions first.** Every element earns its place by helping an official find a bottleneck or confirm a target is met. Decoration that pushes data below the fold is a cost, not a flourish.
2. **Jargon carries an explanation.** Domain terms (SLI, parked, disposed, seat) are load-bearing for officials and opaque to citizens; they appear with enough context that a non-expert is not stranded.
3. **Comparison is the core gesture.** The product's value is relative — this local body against that one, this month against last, this service against its target. Views should make comparison easy rather than presenting isolated numbers.
4. **Never imply precision the data lacks.** Mock, partial, or stale figures must be visibly labelled as such.
5. **Reachable on whatever device is to hand.** An official checking a delayed-file count on a phone is a first-class case, not a degraded one.

## Accessibility & Inclusion

WCAG 2.2 AA is a **strong internal target** — not externally audited, but held to deliberately, and traded off only in rare, consciously chosen cases. Known product-specific needs: bilingual English/Malayalam rendering, and usable interaction targets on touch devices given the mixed desk-and-mobile usage scene.
