import {tmpFileSyncFactory as factory} from "#~auto/export/tmpFileSyncFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"

const impl = factory()

export const tmpFileSync : ImplementationDocType = impl
