# Project design continuity

Before changing the design direction, read `docs/DESIGN_MEMORY.md` and `docs/2028_DESIGN_RESET.md`.

The project's central premise is the octopus's different evolutionary path as an analogy for how SimpleX's distinct network and chat foundations could produce a different messaging experience. Preserve this in design rationale, not just styling. Space follows attention; design has no ego.

Keep speculative capabilities, local browser simulations and verified SimpleX features distinct. Preserve previous iterations. Sources in `prototypes/src` generate root demos through `node scripts/build-demo.mjs`; edit sources and rebuild rather than changing generated pages alone. Do not claim usability research or cryptographic guarantees from browser tests.

The owner requested the latest edit be identified everywhere. Since 6 October 2026 that is **V2.1.2.3** ([docs/V2_1_2_3.md](docs/V2_1_2_3.md)): the rail candidate with everything in V2.1.2.2 (profiles and incognito, public channel discovery, email handoff, the shape scale) plus photo pins, photo tools, email channels and a home at scale with one motion. The whole story is told in `showcase.html`; keep it current when a new edit ships. Lead documentation and review routes to `v21.html?mobile=1&version=2.1.2.3`; `version=2.1.2.1` and `version=2.1.2.2` are aliases of the same build. `v2121.html` is the V2.1.2.1 gallery of 4 October 2026 and is kept as that state. V2 is the earlier reference baseline. Preserve older designs and dated audits as scoped history; latest edit does not imply production readiness or participant validation.

The octopus theory is the intended interaction-flow architecture: coordination, local action, adaptable space, retained state, deliberate crossing and coherent return. Human relationships/entities organise the interface. Distinguish this thesis from literal anatomy and SimpleX protocol implementation; do not imply all V2 states implement it yet.

Design rules that the checks enforce (5 October 2026): one shape scale (circle, pill, 12, 16, 6, 5 px); words stay whole at large text; grid tiles are anchored; identity is named only at the point of action; colour is never the only cue; targets 44 px and text 12 px or more. `docs/MOBILE_AUDIT_LOG.md` is the single running audit; add new audits at the top and never rewrite dated ones.
