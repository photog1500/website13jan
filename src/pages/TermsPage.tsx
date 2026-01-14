import React from 'react';
import { ContentSection } from "@/components/home/ContentSection";

export function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <ContentSection title="Privacy Policy & Terms of Service">
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-serif font-bold mb-4">Terms of Service</h3>
            <p>
              Welcome to Latch Orchards. By accessing this website, you agree to these terms and conditions.
              We reserve the right to change these terms at any time.
            </p>
            {/* User can add more TOS here */}
          </section>
          
          <section>
            <h3 className="text-2xl font-serif font-bold mb-4">Privacy Policy</h3>
            <p>
              Your privacy is important to us. We do not sell or share your personal information with third parties.
              Any information collected is used solely for the purpose of improving your experience with Latch Orchards.
            </p>
            {/* User can add more Privacy Policy here */}
          </section>
        </div>
      </ContentSection>
    </main>
  );
}
