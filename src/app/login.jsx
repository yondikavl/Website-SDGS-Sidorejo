// In your login page
import RootLayout from "@my/layouts/RootLayout";

export default function LoginPage() {
  return (
    <RootLayout isLoginPage>
      {/* Your login page content */}
    </RootLayout>
  );
}

// In other pages
import RootLayout from "@my/layouts/RootLayout";

export default function OtherPage() {
  return (
    <RootLayout>
      {/* Your other page content */}
    </RootLayout>
  );
}
