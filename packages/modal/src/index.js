import { default as Plugin } from './plugin'
import { default as ModalListener } from './ModalListener'
import { default as ModalRenderer } from './ModalRenderer'
import { default as ModalTarget } from './ModalTarget'
import { default as Modal } from './Modal'

// I first tried to export each part into its own named export, but consuming
// those from another app was not possible: I could only see the default one.
// So, I'm exporting all the modules from the default export and then
// destructure them on the app side. This is a bit ugly, and restrict the
// API but that will do the trick for now.

export default { Plugin, ModalListener, ModalRenderer, ModalTarget, Modal }
