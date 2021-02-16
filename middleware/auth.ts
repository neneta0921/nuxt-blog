export default function(context: any) {
  console.log("[Middleware] Just Auth");

  // If not login, redirect login page
  if (!context.store.getters["post/isAuthenticated"]) {
    context.redirect("/admin/auth");
  }
}
