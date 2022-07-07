import {connect} from '../db';

export const home = (req, res) => {
    res.send('My Home site deployed');
}
export const getTask = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    console.log(rows);
    res.json(rows[0]);
}
export const getTasks = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query('SELECT * FROM tasks');
    console.log(rows);
    res.json(rows);
}
export const getTaskCount = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query('SELECT COUNT(*) FROM tasks');
    console.log(rows);
    res.json(rows[0]["COUNT(*)"]);
}
export const saveTask = async (req, res) => {
    const db = await connect();
    console.log(JSON.stringify(req.body), 'stringify');
    console.log(req.body, 'req');
    console.log(res.body, 'RES');

    
    const [results] = await db.query('INSERT INTO tasks(title, description) VALUES(?,?)',
    [req.body.title, req.body.description]);
    res.json({
        id: results.resultId,
        ...req.body,
    });
}
export const deleteTask = async (req, res) => {
    const db = await connect();
    const [results] = await db.query('DELETE FROM tasks WHERE id = ?',
    [req.params.id]);
    res.sendStatus(204);
}
export const updateTask = async (req, res) => {
    const db = await connect();
    await db.query('UPDATE tasks SET ? WHERE id = ?',
    [req.body, req.params.id]);
    res.sendStatus(204);
}