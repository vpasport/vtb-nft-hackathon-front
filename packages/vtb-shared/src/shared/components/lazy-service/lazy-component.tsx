// @ts-nocheck

export async function loadComponent(scope: string, module: string) {
  try {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    const container = await window[scope] // or get the container somewhere else

    container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module)

    const Module = factory()

    return Module

    // Initialize the container, it may provide shared modules
  } catch (err) {
    console.error(err)

    return {
      [scope]: () => <>Module [{scope}] loading error</>,
    }
  }
}
