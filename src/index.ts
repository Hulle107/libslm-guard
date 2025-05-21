export type GuardVariables = { [key: string]: unknown };
export type ValidateFunction = (value: unknown) => boolean;

function interpolation(template: string, variable: string, value: unknown): string {
    return template
        .replace(`%variable`, `${variable}`)
        .replace(`%value`, `${value}`)
}

class against {
    static null(variables: GuardVariables, message?: string) {
        if (variables === null) throw new Error(`guard.against.null: 'variables' given can't be null.`);
        if (variables === undefined) throw new Error(`guard.against.null: 'variables' given can't be undefined.`);
        if (Object.keys(variables).length === 0) throw new Error(`guard.against.null: 'variables' given can't be empty.`);
        if (message === undefined) message = `guard.against.null: '%variable' is null.`;

        const length: number = Object.keys(variables).length;

        for (let index: number = 0; index < length; index++) {
            const name = Object.keys(variables)[index];
            const value = variables[name];

            if (value === null) throw new Error(interpolation(message, name, value));
        }

        return this;
    }

    static undefined(variables: GuardVariables, message?: string) {
        if (variables === null) throw new Error(`guard.against.undefined: 'variables' given can't be null.`);
        if (variables === undefined) throw new Error(`guard.against.undefined: 'variables' given can't be undefined.`);
        if (Object.keys(variables).length === 0) throw new Error(`guard.against.undefined: 'variables' given can't be empty.`);
        if (message === undefined) message = `guard.against.undefined: '%variable' is undefined.`;

        const length: number = Object.keys(variables).length;

        for (let index: number = 0; index < length; index++) {
            const name = Object.keys(variables)[index];
            const value = variables[name];

            if (value === undefined) throw new Error(interpolation(message, name, value));
        }

        return this;
    }

    static empty(variables: GuardVariables, message?: string) {
        if (variables === null) throw new Error(`guard.against.empty: 'variables' given can't be null.`);
        if (variables === undefined) throw new Error(`guard.against.empty: 'variables' given can't be undefined.`);
        if (Object.keys(variables).length === 0) throw new Error(`guard.against.empty: 'variables' given can't be empty.`);
        if (message === undefined) message = `guard.against.empty: '%variable' is empty.`;

        let length: number = Object.keys(variables).length;

        for (let index: number = 0; index < length; index++) {
            const name = Object.keys(variables)[index];
            const value = variables[name];

            if (typeof value === 'string' && value.length === 0) throw new Error(interpolation(message, name, value));
            if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) throw new Error(interpolation(message, name, value));
            if (Array.isArray(value) && value.length === 0) throw new Error(interpolation(message, name, value));
        }

        return this;
    }
    
    static outOfRange(variables: GuardVariables, minimum: number, maximum: number, message?: string) {
        if (variables === null) throw new Error(`guard.against.outOfRange: 'variables' given can't be null.`);
        if (variables === undefined) throw new Error(`guard.against.outOfRange: 'variables' given can't be undefined.`);
        if (Object.keys(variables).length === 0) throw new Error(`guard.against.outOfRange: 'variables' given can't be empty.`);
        if (message === undefined) message = `guard.against.outOfRange: '%variable' is not within specified range.`;

        let length: number = Object.keys(variables).length;

        for (let index: number = 0; index < length; index++) {
            const name = Object.keys(variables)[index];
            const value = variables[name];

            if (typeof value === 'string' && (value.length < minimum || value.length > maximum)) throw new RangeError(interpolation(message, name, value));
            if (typeof value === 'number' && (value < minimum || value > maximum)) throw new RangeError(interpolation(message, name, value));
            if (Array.isArray(value) && (value.length < minimum || value.length > maximum)) throw new RangeError(interpolation(message, name, value));
        }

        return this;
    }

    static lessThen(variables: GuardVariables, minimum: number, message?: string) {
        if (variables === null) throw new Error(`guard.against.lessThen: 'variables' given can't be null.`);
        if (variables === undefined) throw new Error(`guard.against.lessThen: 'variables' given can't be undefined.`);
        if (Object.keys(variables).length === 0) throw new Error(`guard.against.lessThen: 'variables' given can't be empty.`);
        if (message === undefined) message = `guard.against.lessThen: '%variable' is less then specified range.`;

        let length: number = Object.keys(variables).length;

        for (let index = 0; index < length; index ++) {
            const name = Object.keys(variables)[index];
            const value = variables[name];

            if (typeof value === 'string' && value.length < minimum) throw new Error(interpolation(message, name, value));
            if (typeof value === 'number' && value < minimum) throw new Error(interpolation(message, name, value));
            if (Array.isArray(value) && value.length < minimum) throw new Error(interpolation(message, name, value));
        }

        return this;
    }

    static biggerThen(variables: GuardVariables, maximum: number, message?: string) {
        if (variables === null) throw new Error(`guard.against.biggerThen: 'variables' given can't be null.`);
        if (variables === undefined) throw new Error(`guard.against.biggerThen: 'variables' given can't be undefined.`);
        if (Object.keys(variables).length === 0) throw new Error(`guard.against.biggerThen: 'variables' given can't be empty.`);
        if (message === undefined) message = `guard.against.biggerThen: '%variable' is bigger then specified range.`;

        let length: number = Object.keys(variables).length;

        for (let index = 0; index < length; index ++) {
            const name = Object.keys(variables)[index];
            const value = variables[name];

            if (typeof value === 'string' && value.length > maximum) throw new Error(interpolation(message, name, value));
            if (typeof value === 'number' && value > maximum) throw new Error(interpolation(message, name, value));
            if (Array.isArray(value) && value.length > maximum) throw new Error(interpolation(message, name, value));
        }

        return this;
    }
}

export class guard {
    static against = against;
}