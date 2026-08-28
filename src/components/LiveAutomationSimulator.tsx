import React, { useState } from 'react';
import { SIMULATION_SCENARIOS } from '../data/websiteData';
import type { SimulationScenario } from '../types';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Hotel, 
  Activity, 
  ShoppingBag, 
  GraduationCap,
  Cpu,
  Info,
  Zap,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

interface LiveAutomationSimulatorProps {
  onScheduleDemo: () => void;
}

export const LiveAutomationSimulator: React.FC<LiveAutomationSimulatorProps> = ({ onScheduleDemo }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SIMULATION_SCENARIOS[0].id);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [executionLog, setExecutionLog] = useState<{ step: number; text: string; time: string }[]>([]);

  const activeScenario: SimulationScenario = 
    SIMULATION_SCENARIOS.find((s) => s.id === selectedScenarioId) || SIMULATION_SCENARIOS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hotel': return <Hotel className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStepIndex(0);
    setExecutionLog([
      { step: 1, text: `[TRIGGER] ${activeScenario.initialTrigger}`, time: 'Step 1' }
    ]);

    const steps = activeScenario.steps;
    let stepIdx = 0;

    const executeNextStep = () => {
      if (stepIdx < steps.length) {
        const current = steps[stepIdx];
        setCurrentStepIndex(stepIdx);
        setExecutionLog((prev) => [
          ...prev,
          { 
            step: stepIdx + 2, 
            text: `[${current.label.toUpperCase()}] ${current.actor} → ${current.action}`, 
            time: `Step ${stepIdx + 2}` 
          }
        ]);
        stepIdx++;
        setTimeout(executeNextStep, 650);
      } else {
        setIsRunning(false);
        setIsCompleted(true);
        setExecutionLog((prev) => [
          ...prev,
          { 
            step: steps.length + 2, 
            text: `[COMPLETED] Workflow verified and system records updated.`, 
            time: 'Done' 
          }
        ]);
      }
    };

    setTimeout(executeNextStep, 500);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setIsCompleted(false);
    setExecutionLog([]);
  };

  const handleScenarioChange = (id: string) => {
    setSelectedScenarioId(id);
    handleReset();
  };

  return (
    <section id="live-simulation-section" className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue-700 mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE AI AUTOMATION SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-950 tracking-tight">
            See how workflows <span className="text-blue-600">execute</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore how automated workflows process multi-step business scenarios. Select an industry scenario below to view the simulated process.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-2xl text-left">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{COMPANY_CONFIG.disclaimers.simulator}</span>
          </div>
        </div>

        {/* Scenario Selection Tabs (5 Scenarios) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto mb-8">
          {SIMULATION_SCENARIOS.map((scenario) => {
            const isSelected = selectedScenarioId === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => handleScenarioChange(scenario.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-500 text-blue-950 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {getIcon(scenario.iconName)}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    {scenario.industry.split('&')[0]}
                  </span>
                </div>
                <span className="font-heading text-xs font-bold text-slate-900 line-clamp-2">
                  {scenario.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Simulation Console Interface (Clean White Card) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          {/* Active Scenario Overview */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 text-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-heading text-xs font-bold">
                  Scenario: {activeScenario.name}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  [{activeScenario.industry}]
                </span>
              </div>
              <div className="mt-2 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 font-semibold">Trigger: </strong>
                {activeScenario.initialTrigger}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isRunning
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xs'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-pulse' : ''}`} />
                <span>{isRunning ? 'Processing...' : 'Run Simulation'}</span>
              </button>

              <button
                onClick={handleReset}
                disabled={isRunning || currentStepIndex === -1}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Reset simulation"
                aria-label="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Step-by-Step Flow */}
          <div className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {activeScenario.steps.map((step, idx) => {
                const isActive = currentStepIndex === idx;
                const isPast = currentStepIndex > idx || isCompleted;

                return (
                  <div
                    key={step.id}
                    className={`relative p-4 rounded-2xl border transition-all duration-300 text-left ${
                      isActive
                        ? 'bg-amber-50 border-amber-500 shadow-sm ring-1 ring-amber-400'
                        : isPast
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-slate-50 border-slate-200/90'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive 
                          ? 'bg-amber-500 text-slate-950' 
                          : isPast 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {step.label}
                      </span>
                      {isPast ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : isActive ? (
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                        </span>
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>

                    <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">
                      {step.actor}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {step.action}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simulation Log Terminal */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Simulation Progress</span>
              </span>
              <span className="text-[10px] text-slate-500">
                SIMULATION CONSOLE
              </span>
            </div>

            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-2">
              {executionLog.length === 0 ? (
                <div className="text-slate-500 italic">
                  Click "Run Simulation" above to observe the automated workflow steps...
                </div>
              ) : (
                executionLog.map((log, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px]">
                    <span className="text-amber-400 font-semibold">{log.time}</span>
                    <span className="text-slate-300">{log.text}</span>
                  </div>
                ))
              )}
            </div>

            {isCompleted && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Simulated Workflow Completed: Illustrative Automated Execution.</span>
                </div>
                <button
                  onClick={onScheduleDemo}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <span>REQUEST TAILORED DEMO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
