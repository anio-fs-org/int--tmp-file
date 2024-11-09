import {tmpFileFactory as factory} from "#~auto/export/tmpFileFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"

const impl = factory()

export const tmpFile : ImplementationDocType = impl
