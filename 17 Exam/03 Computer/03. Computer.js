class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];

        this.totalRamUsage = 0; // percent
        this.totalCpuUsage = 0; // percent
    }

    installAProgram(name, requiredSpace) {
        // todo < or <=
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive');
        }

        const object = {name: name, requiredSpace: requiredSpace};
        this.installedPrograms.push(object);
        this.hddMemory -= requiredSpace;
        //The following function should return the newly created object.
        return object;
    };

    uninstallAProgram(name) {
        const programToUninstall = this.installedPrograms.filter((program) => program.name === name)[0];
        if (!programToUninstall) {
            throw new Error('Control panel is not responding');
        }

        // this.hddMemory += programToUninstall['requiredSpace]; it can be done in this way too;
        this.hddMemory += programToUninstall.requiredSpace;
        this.installedPrograms = this.installedPrograms.filter(program => program.name !== name);
        // This function should return the installedPrograms array where the given program name is excluded.
        return this.installedPrograms;
    }

    openAProgram(name) {
        const programToOpen = this.installedPrograms.filter((program) => program.name === name)[0];
        if (!programToOpen) {
            throw new Error(`The ${name} is not recognized`);
        }

        const searchedProgramInTaskManager = this.taskManager
            .filter((program) => program.name === name)[0];
        if (searchedProgramInTaskManager) {
            throw new Error(`The ${name} is already open`)
        }

        //Keep in mind the both formulas calculate a numbers in percent (%) for the current ram and cpu usage.
        const currentRamUsage = (programToOpen.requiredSpace / this.ramMemory) * 1.5;
        const currentCpuUsage = ((programToOpen.requiredSpace / this.cpuGHz) / 500) * 1.5;

        // todo > or >=
        if (this.totalRamUsage + currentRamUsage >= 100) {
            throw new Error(`${programToOpen.name} caused out of memory exception`)
        }

        if (this.totalCpuUsage + currentCpuUsage >= 100) {
            throw new Error(`${programToOpen.name} caused out of cpu exception`)
        }

        this.totalRamUsage += currentRamUsage;
        this.totalCpuUsage += currentCpuUsage;

        const object = {
            name: programToOpen.name,
            ramUsage: currentRamUsage,
            cpuUsage: currentCpuUsage
        };

        this.taskManager.push(object);
        return object;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        const result = [];
        for (const taskManagerElement of this.taskManager) {
            let tempStr = `Name - ${taskManagerElement['name']} | Usage - CPU: ${taskManagerElement['cpuUsage'].toFixed()}%, RAM: ${taskManagerElement['ramUsage'].toFixed()}%`;
            result.push(tempStr);
        }

        return result.join('\n');
    }
}

let computer = new Computer(4096, 7.5, 250000);

// act
computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());