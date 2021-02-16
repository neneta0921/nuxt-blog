export default function(context: any) {
  console.log("[Middleware] Check Auth");
  if (process.client) {
    context.store.dispatch("post/initAuth");
  }
}
