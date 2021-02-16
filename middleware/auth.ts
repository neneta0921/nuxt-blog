export default function(context: any) {
  // If not login, redirect login page
  if (!context.store.getters["post/isAuthenticated"]) {
    context.redirect("/admin/auth");
  }
}
