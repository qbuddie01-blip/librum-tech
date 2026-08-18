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
      { step: 1, text: `[TRIGGER] ${activeScenario.initialTrigger}`, time: '0ms' }
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
            step: stepIdx + 1, 
            text: `[${current.label} / ${current.actor}] ${current.action} — ${current.detail}`, 
            time: `+${current.timeMs}ms` 
          }
        ]);
        stepIdx++;
        setTimeout(executeNextStep, 950);
      } else {
        setIsRunning(false);
        setIsCompleted(true);
        setExecutionLog((prev) => [
          ...prev,
          { step: steps.length + 1, text: `[OUTCOME] ${activeScenario.expectedOutcome}`, time: 'DONE' }
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
    setSelectedIndustryId(id);
    handleReset();
  };

  const setSelectedIndustryId = (id: string) => {
    setSelectedScenarioId(id);
  };

  return (
    <section id="live-simulation-section" className="py-24 relative overflow-hidden bg-[#020617] border-y border-slate-800/80">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE AI AUTOMATION SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            SEE HOW WORKFLOWS <span className="gold-gradient-text">EXECUTE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience how Librum’s multi-agent automation engines process complex business scenarios in real-time. Select an industry scenario below and trigger the live simulated pipeline.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs font-mono text-slate-300 max-w-2xl text-left">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
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
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                    {getIcon(scenario.iconName)}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">
                    {scenario.industry.split('&')[0]}
                  </span>
                </div>
                <span className="font-heading text-xs font-bold text-white line-clamp-2">
                  {scenario.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Simulation Console Interface */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/25 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Active Scenario Overview */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 text-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold">
                  Scenario: {activeScenario.name}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  [{activeScenario.industry}]
                </span>
              </div>
              <div className="mt-2 text-xs sm:text-sm text-slate-300">
                <strong className="text-amber-400 font-mono">Trigger: </strong>
                {activeScenario.initialTrigger}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isRunning
                    ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-pulse' : ''}`} />
                <span>{isRunning ? 'Executing...' : 'Run Simulation'}</span>
              </button>

              <button
                onClick={handleReset}
                disabled={isRunning || currentStepIndex === -1}
                className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
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
                    className={`relative p-4 rounded-xl border transition-all duration-300 text-left ${
                      isActive
                        ? 'bg-amber-500/10 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50'
                        : isPast
                        ? 'bg-slate-950 border-emerald-500/40'
                        : 'bg-slate-950/60 border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive 
                          ? 'bg-amber-500 text-slate-950' 
                          : isPast 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {step.label}
                      </span>
                      {isPast ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isActive ? (
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                        </span>
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-slate-600" />
                      )}
                    </div>

                    <h4 className="font-heading text-xs font-bold text-white mb-1">
                      {step.actor}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {step.action}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Telemetry Log Terminal */}
          <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Live Execution Telemetry</span>
              </span>
              <span className="text-[10px] text-slate-500">
                LIBRUM SIMULATION PROTOCOL
              </span>
            </div>

            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-2">
              {executionLog.length === 0 ? (
                <div className="text-slate-600 italic">
                  Press "Run Simulation" above to watch automated packet dispatch...
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
              <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Simulated Workflow Completed: Zero Manual Intervention Required.</span>
                </div>
                <button
                  onClick={onScheduleDemo}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
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
