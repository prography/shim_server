const service = require('../services/users');

const { NODE_ENV } = process.env;

const disableUser = async (req, res) => {
  const { token } = req;
  await service.disableUser(token.uid);
  res.end();
};

const login = async (req, res) => {
  const schema = req.header('Authorization');
  const googleToken = schema; // todo: check schema
  if (NODE_ENV === 'development') {
    console.log('google token', googleToken);
  }
  const token = await service.login(googleToken);
  res.json({ token });
};

const getUser = async (req, res) => {
  const { token } = req;
  const user = await service.getUser(token.uid);
  res.json(user.toJSON());
};

const getSubscription = async (req, res) => {
  const { token } = req;
  const subscription = await service.getSubscription(token.uid);
  res.json(subscription.toJSON());
};

const subscribe = async (req, res) => {
  const { token } = req;
  const { planId } = req.body;
  await service.subscribe(token.uid, planId);
  res.end();
};

const unsubscribe = async (req, res) => {
  const { token } = req;
  await service.unsubscribe(token.uid);
  res.end();
};

const updateUser = async (req, res) => {
  const { token } = req;
  const data = req.body;
  // todo: data property filter
  await service.updateUser(token.uid, data);
  res.end();
};

module.exports = {
  disableUser,
  login,
  getUser,
  getSubscription,
  subscribe,
  unsubscribe,
  updateUser,
};
