export interface DaylioDB {
  version: number;
  isReminderOn: boolean;
  pin: string;
  customMoods: Mood[];
  tags: Tag[];
  dayEntries: DayEntrie[];
  achievements: Achievement[];
  daysInRowLongestChain: number;
  goals: Goal[];
  prefs: Pref[];
  tag_groups: Tag_group[];
  metadata: {
    number_of_entries: number;
    created_at: number;
    is_auto_backup: boolean;
    platform: string;
    android_version: number;
    number_of_photos: number;
    photos_size: number;
  };
  moodIconsPackId: number;
  preferredMoodIconsIdsForMoodIdsForIconsPack: {
    [key: number]: {
      [key: number]: number;
    };
  };
  assets: Asset[];
  goalEntries: GoalEntrie[];
  goalSuccessWeeks: GoalSuccessWeek[];
  reminders: Reminder[];
  writingTemplates: WritingTemplate[];
  moodIconsDefaultFreePackId: number;
}

type Mood = {
  id: number;
  custom_name: string;
  mood_group_id: number;
  mood_group_order: number;
  icon_id: number;
  predefined_name_id: number;
  state: number;
  createdAt: number;
};

type Tag = {
  id: number;
  name: string;
  createdAt: number;
  icon: number;
  order: number;
  state: number;
  id_tag_group: Tag_group['id'];
};

type DayEntrie = {
  id: number;
  minute: number;
  day: number;
  month: number;
  year: number;
  datetime: number;
  timeZoneOffset: number;
  mood: Mood['id'];
  note: string;
  note_title: string;
  tags: Tag['id'][];
  assets: Asset['id'][];
};

type Achievement = {
  // Has more stuff here
  name: string;
};

type Goal = {
  id: number;
  goal_id: number;
  created_at: number;
  reminder_enabled: boolean;
  reminder_minute: number;
  reminder_hour: number;
  state: number;
  repeat_type: number;
  repeat_value: number;
  id_tag: Tag['id'];
  end_date: number;
  id_challenge: number;
  name: string;
  id_icon: number;
  id_avatar: number;
  order: number;
};

type Pref = {
  key: string;
  pref_name: string;
  value: boolean | string | number;
};

type Tag_group = {
  id: number;
  name: string;
  is_expanded: boolean;
  order: number;
};

type Asset = {
  id: number;
  checksum: string;
  type: string;
  createdAt: number;
  createdAtOffset: number;
  android_metadata: string;
};

type GoalEntrie = {
  id: number;
  goalId: Goal['goal_id'];
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  createdAt: number;
};

type GoalSuccessWeek = {
  goal_id: Goal['id'];
  year: number;
  week: number;
  create_at_year: number;
  create_at_month: number;
  create_at_day: number;
};

type Reminder = {
  // Maybe there's more stuff here
  id: number;
  hour: number;
  minute: number;
  state: number;
  custom_text_enabled: boolean;
};

type WritingTemplate = {
  // Maybe there's more stuff here
  id: number;
  order: number;
  predefined_template_id: number;
  title: string;
  body: string;
};
