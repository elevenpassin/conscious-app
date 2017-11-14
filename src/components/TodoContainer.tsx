import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

interface TodoContainerProps {
    className?: string;
    theme?: ThemeInterface;
}

const TodoContainer: React.StatelessComponent<TodoContainerProps> = (props: TodoContainerProps) => {
    return (
        <div className={props.className}>
            <TodoInput/>
            <TodoList/>
        </div>
    );
};

export default styled(TodoContainer)`
    display: grid;
    grid-template-columns: 0.05fr 0.9fr 0.05fr;
    grid-template-rows: 0.05fr 0.2fr 0.7fr 0.05fr;
`;