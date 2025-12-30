import type { SchemaTypeDefinition } from "sanity";

import { event } from "./documents/event";
import { venue } from "./documents/venue";
import { partner } from "./documents/partner";
import { siteSettings } from "./documents/siteSettings";

import { activationItem } from "./objects/activationItem";
import { sectionTickets } from "./objects/sectionTickets";
import { sectionLive } from "./objects/sectionLive";
import { sectionActivations } from "./objects/sectionActivations";
import { sectionPartners } from "./objects/sectionPartners";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    partner,
    venue,
    event,
    activationItem,
    sectionTickets,
    sectionLive,
    sectionActivations,
    sectionPartners,
  ],
};
