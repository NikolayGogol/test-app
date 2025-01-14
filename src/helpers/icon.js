import {icons} from "../models/icons.js";

export function icon(name) {
    return icons.find(el => el.name === name)?.svg ?? null
}
