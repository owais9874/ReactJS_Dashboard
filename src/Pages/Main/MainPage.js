import React from "react";
import "./MainPage.css";

import {
  AuthorsAchievement,
  AvgEarningChart,
  HRstatesReport,
  InProcessProject,
  PerformanceOverview,
  PerformanceToday,
  ProPlan,
  StatesAndHistory,
  WarePhaseStats,
} from "../../Components";
import {
  ActiveProjCard,
  EarningProjCard,
  ExternalProjCard,
  ProfessionalProjCard,
} from "../../Components/AllProjectCards";

export default function MainPage() {
  return (
    <>
      <main class="page-content app-main">
        <div class="all-cards">
          <ActiveProjCard />
          <EarningProjCard />
        </div>
        <div class="all-cards">
          <ProfessionalProjCard />
          <ExternalProjCard />
        </div>
        <ProPlan />
        <PerformanceOverview />
        <AuthorsAchievement />
        <InProcessProject />
        <PerformanceToday />
        <AvgEarningChart />
        <section class="projects-stats-chart m-20">
          <StatesAndHistory />
        </section>
        <section class="projects-stats-chart ml-20 mr-20">
          <WarePhaseStats />
          <HRstatesReport />
        </section>
      </main>
    </>
  );
}
