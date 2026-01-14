import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { NurseryPage } from "@/pages/NurseryPage";
import { CitrusPage } from "@/pages/CitrusPage";
import { TermsPage } from "@/pages/TermsPage";

// Citrus Subpages
import { SatsumasMandarinsPage } from "@/pages/citrus/SatsumasMandarinsPage";
import { TheKuatsPage } from "@/pages/citrus/TheKuatsPage";
import { OrangesTangerinesPage } from "@/pages/citrus/OrangesTangerinesPage";
import { LemonsLimesPage } from "@/pages/citrus/LemonsLimesPage";
import { TheBigStuffPage } from "@/pages/citrus/TheBigStuffPage";
import { VariegatedVarietiesPage } from "@/pages/citrus/VariegatedVarietiesPage";
import { OwnersFavesPage } from "@/pages/citrus/OwnersFavesPage";
import { RootstocksPage } from "@/pages/citrus/RootstocksPage";

// Orchard Subpages
import { RipeCalendarPage } from "@/pages/RipeCalendarPage";
import { RecipesPage } from "@/pages/RecipesPage";
import { AllFruitPage } from "@/pages/AllFruitPage";
import { AllCitrusPage } from "@/pages/AllCitrusPage";
import { AllApplesPage } from "@/pages/AllApplesPage";
import { VarietyDetailsPage } from "@/pages/VarietyDetailsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/citrus" element={<CitrusPage />} />
            <Route path="/nursery" element={<NurseryPage />} />
            <Route path="/nursery/:category" element={<NurseryPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/ripe-calendar" element={<RipeCalendarPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/varieties/fruit" element={<AllFruitPage />} />
            <Route path="/varieties/citrus" element={<AllCitrusPage />} />
            <Route path="/varieties/apples" element={<AllApplesPage />} />
            
            {/* Citrus Routes */}
            <Route path="/citrus/satsumas-mandarins" element={<SatsumasMandarinsPage />} />
            <Route path="/citrus/the-kuats" element={<TheKuatsPage />} />
            <Route path="/citrus/oranges-tangerines" element={<OrangesTangerinesPage />} />
            <Route path="/citrus/lemons-limes" element={<LemonsLimesPage />} />
            <Route path="/citrus/the-big-stuff" element={<TheBigStuffPage />} />
            <Route path="/citrus/variegated-varieties" element={<VariegatedVarietiesPage />} />
            <Route path="/citrus/owners-faves" element={<OwnersFavesPage />} />
            <Route path="/citrus/rootstocks" element={<RootstocksPage />} />
            
            {/* Variety Details Routes */}
            <Route path="/varieties/:categoryId/:varietyId" element={<VarietyDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
